const tagTemplate = document.createElement("template");

tagTemplate.innerHTML = `

<section class="tag">
    <div class="tag__content">
        <span class="tag__name">Tag</span>
        <a href="" class="tag__button--delete"> x </a>
    </div>
    <div class="patch__tag--form-container hidden">
        <form class="patch__tag">
            <input type="text" name="name" class="tag__patch--name-input">
            <input type="color" name="color" class="tag__patch--color-input">
            <button type="submit" class="tag__submit--edit"> ✔ </button>
            <button type="button" class="tag__cancel--edit" > ✕ </button>
        </form>
    </div>
</section>

`;

const tagTemplateOption = document.createElement("template");
tagTemplateOption.innerHTML = `
<option value=""> </option>
`

const tagModule = {

    insertTagInCard: (cardData, tagData) => {
        const tagClone = document.importNode(tagTemplate.content, true);
        tagClone.querySelector(".tag").dataset.tagId = tagData.id;
        tagClone.querySelector(".tag").style.borderColor = tagData.color;

        tagClone.querySelector(".tag__name").textContent = tagData.name;
        tagClone.querySelector(".tag__name").addEventListener("dblclick", tagModule.showPatchTagForm);
        tagClone.querySelector(".tag__button--delete").addEventListener("click", cardModule.removeTagFromCard);

        tagClone.querySelector(".patch__tag").addEventListener("submit", tagModule.patchTag);
        tagClone.querySelector("input[name='color']").value = tagData.color;
        tagClone.querySelector(".tag__cancel--edit").addEventListener("click", tagModule.hidePatchTagForm);

        const parentCard = document.querySelector(`[data-card-id ="${cardData.id}"]`);
        const cardTagContainer = parentCard.querySelector(".tag__container");

        cardTagContainer.append(tagClone);

        const parentList = document.querySelector(`[data-list-id="${cardData.list_id}"]`);
        listModule.listHeightCheckerElementAdd(parentList);
    },

    insertTagOptionsInAssignForm: (tagData) => {
        const tagOptionContainer = document.querySelector(".tag__assign--input"); 
        const tagOptionClone = document.importNode(tagTemplateOption.content, true);

        tagOptionClone.querySelector("option").value = tagData.id;
        tagOptionClone.querySelector("option").textContent = tagData.name;
        
        tagOptionContainer.append(tagOptionClone);
    },

    insertTagOptionsInRemoveForm: (tagData) => {
        const tagOptionContainer = document.querySelector(".remove__tag--input"); 
        const tagOptionClone = document.importNode(tagTemplateOption.content, true);

        tagOptionClone.querySelector("option").value = tagData.id;
        tagOptionClone.querySelector("option").textContent = tagData.name;
    
        tagOptionContainer.append(tagOptionClone);
    },

    showCreateTagForm: (event) => {
        event.preventDefault();
        const createTagForm = document.querySelector(".tag__add--form-container");
        createTagForm.classList.remove("hidden");
        document.querySelector(".modal__background").classList.remove("hidden");
    },

    showRemoveTagForm: (event) => {
        event.preventDefault();
        document.querySelector(".modal__background").classList.remove("hidden");
        const removeTagFormContainer = document.querySelector(".tag__remove--form-container");
        removeTagFormContainer.classList.remove("hidden");
        const removeTagForm = removeTagFormContainer.querySelector("form");
        const currentTagOptions = removeTagForm.querySelectorAll("option");
        for(let option of currentTagOptions){
            option.remove();
        }
        tagModule.findAllTags();
    },

    // CRUD

    findAllTags: async() => {
        try{
            const response = await fetch(`${utilsModule.base_url}/tags`);
            
            const json = await response.json();

            if(!response.ok) throw alert(json);

            for(let tag of json){
                tagModule.insertTagOptionsInAssignForm(tag);
                tagModule.insertTagOptionsInRemoveForm(tag);
            }
        }catch(error){
            console.error(error.message);
        }
    },

    createTag: async(event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        try{
            const response = await fetch(`${utilsModule.base_url}/tags`, {
                method: "POST",
                body: formData
            })

            const json = await response.json();

            if(!response.ok) throw alert(json);

            event.target.closest(".tag__add--form-container").classList.add("hidden");
            event.target.reset();
            document.querySelector(".modal__background").classList.add("hidden");

        }catch(error){
            console.error(error.message);
        }
    },

    showAddTagToCardForm: (event) => {
        event.preventDefault();
        document.querySelector(".modal__background").classList.remove("hidden");
        const parentCard = event.target.closest(".card");
        const parentCardId = parentCard.dataset.cardId;
        const addTagToCardForm = document.querySelector(".assign__tag--form");

        const formContainer = document.querySelector(".tag__assign--form-container");
        formContainer.classList.remove("hidden");
        formContainer.querySelector("h2").textContent = `Ajouter une catégorie à "${parentCard.querySelector("h3").textContent}"`;

        addTagToCardForm.querySelector("input[name='card_id'").value = parentCardId;
        
        const currentTagOptions = addTagToCardForm.querySelectorAll("option");
        for(let option of currentTagOptions){
            option.remove();
        }
        tagModule.findAllTags();
    },

    showPatchTagForm: (event) => {
        event.preventDefault();
        const selectedTag = event.target.closest(".tag");
        selectedTag.querySelector(".tag__content").classList.add("hidden");
        const form = selectedTag.querySelector(".patch__tag--form-container");
        form.classList.remove("hidden");
    },

    hidePatchTagForm: (event) => {
        event.preventDefault();
        const tag = event.target.closest(".tag");
        tag.querySelector(".patch__tag--form-container").classList.add("hidden");
        tag.querySelector(".tag__content").classList.remove("hidden");
        tag.querySelector("input[name='name']").value = "";
    },

    patchTag: async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const tag = event.target.closest(".tag");
        const currentTagId = tag.dataset.tagId;
        try{
            const response = await fetch(`${utilsModule.base_url}/tags/${currentTagId}`, {
                method: "PATCH",
                body: formData
            })

            const json = await response.json();

            if(!response.ok) throw alert(json);

            tag.querySelector(".tag__content").classList.remove("hidden");
            const allTags = document.querySelectorAll(`[data-tag-id='${currentTagId}']`);
            for(let tag of allTags){
                let currentTag = tag.querySelector(".tag__name");
                currentTag.textContent = json.name;
                tag.style.borderColor = json.color;
            }
            tag.querySelector(".patch__tag--form-container").classList.add("hidden");
            tag.querySelector("input[name='name'").textContent = "";
            tag.querySelector("input[name='name']").value = "";
        }catch(error){
            console.error(error.message);
        }
    },

    deleteTag: async(event) => {
        event.preventDefault();
        const targetTagId = event.target.querySelector("select[name='id']").value;
        if(window.confirm("Supprimer cette catégorie l'enlèvera de toutes les autres cartes, souhaitez-vous continuer ?")){
            try{  
                const response = await fetch(`${utilsModule.base_url}/tags/${targetTagId}`, {
                    method: "DELETE",
                })
                
                const json = await response.json();
                
                if(!response.ok) throw alert(json);
                
                event.target.closest(".tag__remove--form-container").classList.add("hidden");
                
                event.target.reset();
                document.querySelector(".modal__background").classList.add("hidden");

                const allTags = document.querySelectorAll(`[data-tag-id='${targetTagId}']`);
                for(let tag of allTags){
                    const parentCard = tag.closest(".card");
                    const parentList = parentCard.closest(".list__container");
                    listModule.listHeightCheckerElementDragAway(parentList, parentCard);
                    tag.remove();
                }
            }catch(error){
                console.error(error.message);
            }
        } else {
            event.target.closest(".tag__remove--form-container").classList.add("hidden");
            event.target.reset();
            document.querySelector(".modal__background").classList.add("hidden");
        }
    }
}