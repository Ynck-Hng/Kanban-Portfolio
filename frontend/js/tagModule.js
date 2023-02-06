const tagTemplate = document.createElement("template");

tagTemplate.innerHTML = `

<section class="tag" dataset-tag-id="">
    <span class="tag__name">Tag</span>
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

    showCreateTagForm: () => {
        // TODO
    },

    hideCreateTagForm: () => {
        // TODO
    },

    // CRUD

    findAllTags: async() => {
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