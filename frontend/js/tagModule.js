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
            <button type="submit" > ✔ </button>
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
        tagClone.querySelector(".tag__button--delete").addEventListener("click", cardModule.removeTagFromCard);

        const parentCard = document.querySelector(`[data-card-id ="${cardData.id}"]`);
        const cardTagContainer = parentCard.querySelector(".tag__container");

        cardTagContainer.append(tagClone);

        const parentList = document.querySelector(`[data-list-id="${cardData.list_id}"]`);
        listModule.listHeightCheckerCardAdd(parentList);
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
    },

    showRemoveTagForm: (event) => {
        event.preventDefault();
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

            if(!response.ok) throw json;

            console.log("c'est bon");
        }catch(error){
            console.error(error.message);
        }
    },

    showAddTagToCardForm: (event) => {
        event.preventDefault();
        const formContainer = document.querySelector(".tag__assign--form-container");
        formContainer.classList.remove("hidden");
        const parentCard = event.target.closest(".card");
        const parentCardId = parentCard.dataset.cardId;
        const addTagToCardForm = document.querySelector(".assign__tag--form");
        addTagToCardForm.querySelector("input[name='card_id'").value = parentCardId;
        
        const currentTagOptions = addTagToCardForm.querySelectorAll("option");
        for(let option of currentTagOptions){
            option.remove();
        }
        tagModule.findAllTags();
    },

    patchTag: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    deleteTag: async(event) => {
        event.preventDefault();
        const targetTagId = event.target.querySelector("select[name='id']").value;
        console.log(targetTagId);
        try{

            const response = await fetch(`${utilsModule.base_url}/tags/${targetTagId}`, {
                method: "DELETE",
            })

            const json = await response.json();

            if(!response.ok) throw alert(json);

            event.target.closest(".tag__remove--form-container").classList.add("hidden");
            
            event.target.reset();

        }catch(error){
            console.error(error.message);
        }
    }

}