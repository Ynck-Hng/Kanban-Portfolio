const app = {

    init: () => {
        app.addListenerToActions();
        app.getListFromApi();
    },

    addListenerToActions: () => {

            // list
        const showListForm = document.querySelector(".create__list--button");
        showListForm.addEventListener("click", listModule.showCreateListForm);

        const listFormClose = document.querySelector(".list__form--close");
        listFormClose.addEventListener("click", listModule.hideCreateListForm);

        const listForm = document.querySelector(".create__list--form");
        listForm.addEventListener("submit", listModule.createList);

            // card
        const cardFormClose = document.querySelector(".card__form--close");
        cardFormClose.addEventListener("click", cardModule.hideCreateCardForm);
    
        const cardForm = document.querySelector(".create__card--form");
        cardForm.addEventListener("submit", cardModule.createCard);

            // tag
        const tagFormClose = document.querySelector(".tag__form--close");
        tagFormClose.addEventListener("click", tagModule.hideCreateTagForm);
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
                }
            }
        }catch(error){
            console.error(error.message);
        }
    },

}



document.addEventListener("DOMContentLoaded", app.init);