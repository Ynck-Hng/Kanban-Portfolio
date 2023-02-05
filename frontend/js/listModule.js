const listTemplate = document.createElement("template");

listTemplate.innerHTML = `
 <!-- Lists here -->
                <article class="list__container" data-list-id="">
                    <div class="list__header">
                        <div class="list__header--title">
                            <h2> Title list 1</h2>
                        </div>
                        
                        
                        <div class="list__buttons">
                            <div class="list__header--create">
                                <a href="#"> + </a>
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

        listClone.querySelector(".list__header--create").addEventListener("click", cardModule.showCreateCardForm);
        
        //listClone.querySelector(".list__header--delete").addEventListener("click", listModule.deleteList);

        listContainer.append(listClone);
    },

    // Creating List

    showCreateListForm: (event) => {
        const listForm = document.querySelector(".list__form--container");
        listForm.classList.remove("hidden");

    },

    hideCreateListForm: (event) => {
        const listForm = document.querySelector(".list__form--container");
        listForm.classList.add("hidden");
    },

    // CRUD

    findAllLists: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    createList: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    patchList: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    deleteList: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    }
}

const test = {
    name: "AWAWA",
    id: "1",
}

const test2 = {
    id: "213213",
    name:"AWOWO",
}

listModule.insertListInHtml(test);

listModule.insertListInHtml(test2);