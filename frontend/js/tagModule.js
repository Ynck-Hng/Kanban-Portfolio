const tagTemplate = document.createElement("template");

tagTemplate.innerHTML = `

<section class="tag" dataset-tag-id="">
    <div class="tag__content">
        <span class="tag__name">Tag</span>
        <a href="" class="tag__button--edit"> x </a>
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
    
    insertTagInHtml: (cardData, tagData) => {
        const tagClone = document.importNode(tagTemplate.content, true);
        tagClone.querySelector(".tag").dataset.tagId = tagData.id;
        tagClone.querySelector(".tag").style.borderColor = tagData.color;
        tagClone.querySelector(".tag__name").textContent = tagData.name;

        const parentCard = document.querySelector(`[data-card-id ="${cardData.id}"]`);
        const cardTagContainer = parentCard.querySelector(".tag__container");
        cardTagContainer.append(tagClone);

        const parentList = document.querySelector(`[data-list-id="${cardData.list_id}"]`);
        listModule.listHeightCheckerCardAdd(parentList);
    },

    showCreateTagForm: (event) => {
        // TODO
        event.preventDefault();
        const createTagForm = document.querySelector(".tag__form--container");
        createTagForm.classList.remove("hidden");
    },

    // CRUD

    findAllTags: async(event) => {
        try{
            
        }catch(error){
            console.error(error.message);
        }
    },

    createTag: async() => {
        try{

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
    },

    patchTag: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    deleteTag: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    }

}