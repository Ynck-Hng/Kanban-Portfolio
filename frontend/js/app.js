const app = {

    init: () => {
        app.addListenerToActions();
    },

    addListenerToActions: () => {

        const showListForm = document.querySelector(".create__list--button");
        showListForm.addEventListener("click", listModule.showCreateListForm);

        const listFormClose = document.querySelector(".list__form--close");
        listFormClose.addEventListener("click", listModule.hideCreateListForm);

        const cardFormClose = document.querySelector(".card__form--close");
        cardFormClose.addEventListener("click", cardModule.hideCreateCardForm);
    },

}


console.log(window.innerHeight);

const lists = document.querySelectorAll(".list__container");

const listsContainer = document.querySelector(".main__container--lists");
console.log(listsContainer.offsetHeight);


const header = document.querySelector("header");
console.log("header", header.offsetHeight);

for(let list of lists){
    console.log(list.offsetHeight);
    console.log(listsContainer.offsetHeight);
    if(list.offsetHeight >= window.innerHeight){
        console.log("oui");
        list.style.height = `${window.innerHeight - 75}px`;
        list.classList.add("overflow-y");
    }
}

document.addEventListener("DOMContentLoaded", app.init);