const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `

<!--card-->
    <section class="card">
                            
        <div class="tag__container">
           <div class="card__button--add-tag">
                <a href="#"> + </a>
            </div>
        </div>

        <div class="card__content">
                <div class="card__title--container"> 
                    <h3 class="card__title"> Card 1 </h3>
                </div>
                <div class="card__edit--form-container hidden">
                    <form class="card__edit--form">
                        <div class="input__container">
                            <input type="text" name="name" placeholder="Nom..." class="card__name--edit">
                            <input type="color" name="color" class="card__color--edit" value="#ff0000">
                        </div>
                        <button type="submit" class="card__submit--edit"> Valider </button>
                    </form>
                </div>
                <div class="card__buttons">               
                    <div class="card__button--edit">
                        <a href="#"> o </a>
                    </div>
                    <div class="card__button--delete">
                        <a href="#"> x </a>
                    </div>
                </div>
        </div>
    </section>
<!-- End card -->
`

const cardModule = {

    insertCardInHtml: (cardData) => {
        const cardClone = document.importNode(cardTemplate.content, true);
        cardClone.querySelector(".card").dataset.cardId = cardData.id;
        cardClone.querySelector(".card__title").textContent = cardData.name;

        cardClone.querySelector("input[name='color']").value = `${cardData.color}`;
        
        cardClone.querySelector(".card__button--add-tag").addEventListener("click", () => {
            console.log("tag");
        })

        cardClone.querySelector(".card__button--edit").addEventListener("click", cardModule.showPatchCardForm);

        cardClone.querySelector(".card__button--delete").addEventListener("click", cardModule.deleteCard);

        cardClone.querySelector(".card").style.borderColor = cardData.color;

        const parentList = document.querySelector(`[data-list-id="${cardData.list_id}"`);
        const listCardContainer = parentList.querySelector(".cards__container");
        listCardContainer.append(cardClone);
    },


    // Creating Card

    showCreateCardForm: (event) => {
        event.preventDefault();
        const createCardForm = document.querySelector(".card__form--container");
        createCardForm.classList.remove("hidden");
        const parentList = event.target.closest(".list__container");
        const parentListId = parentList.dataset.listId;
        createCardForm.querySelector("input[name='list_id']").value = parentListId;
    },

    hideCreateCardForm: (event) => {
        event.preventDefault();
        const createCardForm = document.querySelector(".card__form--container");
        createCardForm.classList.add("hidden");
    },


    // CRUD

    createCard: async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try{
            const response = await fetch(`${utilsModule.base_url}/cards`, {
                method: "POST",
                body: formData,
            })

            const json = await response.json();

            if(!response.ok) throw alert(json);

            cardModule.insertCardInHtml(json);
            event.target.parentElement.classList.add("hidden");
            event.target.reset();
        }catch(error){
            console.error(error.message);
        }
    },

    showPatchCardForm: (event) => {
        event.preventDefault();
        const targetCard = event.target.closest(".card");
        targetCard.querySelector(".card__title").classList.add("hidden");
        targetCard.querySelector(".card__edit--form-container").classList.remove("hidden");
        
    },

    patchCard: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    deleteCard: async(event) => {
        event.preventDefault();
        const targetCardId = event.target.closest(".card").dataset.cardId;
        try{
            const response = await fetch(`${utilsModule.base_url}/cards/${targetCardId}`, {
                method: "DELETE",
            })

            const json = await response.json();

            if(!response.ok) throw alert(json);

            event.target.closest(".card").remove();
        }catch(error){
            console.error(error.message);
        }
    }

}