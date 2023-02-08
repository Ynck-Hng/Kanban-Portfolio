const app = {

    init: () => {
        app.addListenerToActions();
        app.getListFromApi();
    },

    addListenerToActions: () => {

        const allCloseModalButtons = document.querySelectorAll(".close__modal");
        allCloseModalButtons.forEach(btn => btn.addEventListener("click", utilsModule.hide_modals)); 

            // list
        const showListForm = document.querySelector(".create__list--button");
        showListForm.addEventListener("click", listModule.showCreateListForm);


        const listForm = document.querySelector(".create__list--form");
        listForm.addEventListener("submit", listModule.createList);

            // card

        const cardForm = document.querySelector(".create__card--form");
        cardForm.addEventListener("submit", cardModule.createCard);

            // tag
        const showTagForm = document.querySelector(".create__tag--button");
        showTagForm.addEventListener("click", tagModule.showCreateTagForm);

        const tagForm = document.querySelector(".create__tag--form");
        tagForm.addEventListener("submit", tagModule.createTag);
    
        const assignTagForm = document.querySelector(".assign__tag--form");
        assignTagForm.addEventListener("submit", cardModule.addTagToCard);

        const showRemoveTagForm = document.querySelector(".remove__tag--button");
        showRemoveTagForm.addEventListener("click", tagModule.showRemoveTagForm);

        const removeTagForm = document.querySelector(".delete__tag--form");
        removeTagForm.addEventListener("submit", tagModule.deleteTag);
    },

    getListFromApi: async () => {
        try{
            const response = await fetch(`${utilsModule.base_url}/lists`);

            const json = await response.json();

            if(!response.ok) throw json;

            for(let list of json){
                listModule.insertListInHtml(list);
                for(let card of list.cards){
                    cardModule.insertCardInHtml(card);
                    for(let tag of card.tags){
                        tagModule.insertTagInCard(card, tag);
                    }
                }
            }
        }catch(error){
            console.error(error.message);
        }
    },

}

document.addEventListener("DOMContentLoaded", app.init);