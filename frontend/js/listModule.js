const listTemplate = document.createElement("template");

listTemplate.innerHTML = `
 <!-- Lists here -->
                <article class="list__container">
                    <div class="list__header">
                        <div class="list__header--title">
                            <h2> Title list 1</h2>
                            <form class="patch__list--name hidden">
                                <input type="text" name="name" class="patch__list--input" placeholder="Nom...">
                            </form>
                        </div>
                        
                        
                        <div class="list__buttons">
                            <div class="list__header--create">
                                <a href="#"> ﹢ </a>
                            </div>
                            <div class="list__header--delete">
                                <a href="#"> x </a>
                            </div>
                        </div>
                    </div>

                    <div class="cards__container">
                        
                    </div>
                    </article>
<!-- End list -->
`
const listContainer = document.querySelector(".main__container--lists");

const listModule = {

    insertListInHtml: (listData) => {
        const listClone = document.importNode(listTemplate.content, true);
        listClone.querySelector(".list__container").dataset.listId = listData.id;
        
        listClone.querySelector("h2").textContent = listData.name;
        listClone.querySelector("h2").addEventListener("dblclick", listModule.showPatchList);
        
        listClone.querySelector(".patch__list--name").addEventListener("submit", listModule.patchList);
        listClone.querySelector("input[name='name']").addEventListener("blur", listModule.hidePatchList);
        
        listClone.querySelector(".list__header--create").addEventListener("click", cardModule.showCreateCardForm);
        listClone.querySelector(".list__header--delete").addEventListener("click", listModule.deleteList);
        
        const listsContainer = document.querySelector(".main__container--lists");
        Sortable.create(listsContainer, {
            group: "list",
            draggable: ".list__container",
            animation: 100,
            onEnd: listModule.dragListOnEnd,
            scroll: true,
        })

        const listCardContainer = listClone.querySelector(".cards__container");
            Sortable.create(listCardContainer, {
            group: "card",
            draggable: ".card",
            animation: 100,
            onEnd: cardModule.dragCardOnEnd,
            scroll: true,
        })

        listContainer.append(listClone);
    },

    // Creating List

    showCreateListForm: (event) => {
        event.preventDefault();
        const listForm = document.querySelector(".list__form--container");
        listForm.classList.remove("hidden");
        document.querySelector(".modal__background").classList.remove("hidden");
    },

    // CRUD

    createList: async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try{
            const response = await fetch(`${utilsModule.base_url}/lists`, {
                method: "POST",
                body: formData,
            })

            const json = await response.json();

            if(!response.ok) throw alert(json);

            listModule.insertListInHtml(json);
            event.target.parentElement.classList.add("hidden");
            event.target.reset();
            document.querySelector(".modal__background").classList.add("hidden");
        }catch(error){
            console.error(error.message);
        }
    },

    // Show or Hide patch list

    showPatchList: (event) => {
        event.preventDefault();
        event.target.classList.add("hidden");
        event.target.nextElementSibling.classList.remove("hidden");
        event.target.nextElementSibling.querySelector("input[name='name']").select();
    },

    hidePatchList: (event) => {
        event.preventDefault();
        const listNameForm = event.target.closest("form");
        listNameForm.reset();
        listNameForm.classList.add("hidden");
        const listName = event.target.closest(".list__container").querySelector("h2");
        listName.classList.remove("hidden");
    },

    patchList: async(event) => {
        event.preventDefault();
        const targetListId = event.target.closest(".list__container").dataset.listId;
        const formData = new FormData(event.target);
        try{
            const response = await fetch(`${utilsModule.base_url}/lists/${targetListId}`, {
                method: "PATCH",
                body: formData,
            });
            
            const json = await response.json();
            
            if(!response.ok) throw alert(json);
            const listName = event.target.parentElement.querySelector("h2");
            listName.textContent = json.name;
            listName.classList.remove("hidden");
            event.target.closest(".patch__list--name").classList.add("hidden");
            
        }catch(error){
            console.error(error.message);
        }
    },

    deleteList: async(event) => {
        event.preventDefault();
        try{
            const targetList = event.target.closest(".list__container");
            const targetListId = event.target.closest(".list__container").dataset.listId;
            const response = await fetch(`${utilsModule.base_url}/lists/${targetListId}`, {
                method: "DELETE",
            })

            if(!response.ok) throw alert(json);

            targetList.remove();
        }catch(error){
            console.error(error.message);
        }
    },

    // list height checker

    listHeightCheckerElementAdd: (list) => {
        if(list.offsetHeight > window.innerHeight - 75){
            list.style.height = `${window.innerHeight - 60}px`;
            list.classList.add("overflow-y");
        }
    },

    listHeightCheckerElementDragAway: (list, element) => {
        const newListHeight = list.offsetHeight - element.offsetHeight;
        if(newListHeight < window.innerHeight - 75){
            list.style.height = "";
            list.classList.remove("overflow-y");
        }
    },
    // Drag list

    dragListOnEnd: () => {
        const allLists = document.querySelectorAll(".list__container");
        try{
            allLists.forEach(async (list, index) => {
                const formData = new FormData();
                const listId = list.dataset.listId;
                formData.append("position", index + 1);
                
                const response = await fetch(`${utilsModule.base_url}/lists/${listId}`, {
                    method: "PATCH",
                    body: formData
                })

                const json = await response.json();

                if(!response.ok) throw alert(json);
            })
        }catch(error){
            console.log(error);
        }
    },
}