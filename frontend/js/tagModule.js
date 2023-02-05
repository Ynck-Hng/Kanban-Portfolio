const tagTemplate = document.createElement("template");

tagTemplate.innerHTML = `

<section class="tag" dataset-tag-id="">
    <span class="tag__name">Tag</span>
</section>

`;

const tagModule = {
    
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