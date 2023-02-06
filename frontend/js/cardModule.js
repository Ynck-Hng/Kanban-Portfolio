const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `

<!--card-->
    <section class="card" dataset-card-id="">
                            
        <div class="tag__container">
           <div class="card__button--add-tag">
                <a href="#"> + </a>
            </div>
        </div>

 
        <div class="card__content">
                <div class="card__title--container"> 
                    <h3 class="card__title"> Card 1 </h3>
                </div>
                <div class="hidden">
                    <form class="card__edit--form">
                        <div class="input__container">
                            <input type="text" name="name" placeholder="Nom..." class="card__name--edit">
                            <input type="color" name="color" class="card__color--edit">
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
        cardClone.querySelector(".card__title").textContent = cardData.name;
        cardClone.querySelector(".card__title").addEventListener("dblclick", (e) => {
            console.log(e);
        });

        cardClone.querySelector("input[name='color']").defaultValue = cardData.color;

        cardClone.querySelector(".card__button--add-tag").addEventListener("click", () => {
            console.log("tag");
        })

        cardClone.querySelector(".card__button--edit").addEventListener("click", () => {
            console.log("couleur");
        })

        cardClone.querySelector(".card__button--delete").addEventListener("click", () => {
            console.log("delete");
        })

        cardClone.querySelector(".card").style.borderColor = cardData.color;

        const parentList = document.querySelector(`[data-list-id="${cardData.list_id}"`);
        const listCardContainer = parentList.querySelector(".cards__container");
        listCardContainer.append(cardClone);
    },


    // Creating Card

    showCreateCardForm: (event) => {
        const createCardForm = document.querySelector(".card__form--container");
        createCardForm.classList.remove("hidden");
        const parentList = event.target.closest(".list__container");
        const parentListId = parentList.dataset.listId;
        createCardForm.querySelector("input[name='list_id']").value = parentListId;
    },

    hideCreateCardForm: () => {
        const createCardForm = document.querySelector(".card__form--container");
        createCardForm.classList.add("hidden");
    },


    // CRUD

    createCard: async(event) => {
        event.preventDefault();
        console.log(event);
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    patchCard: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    },

    deleteCard: async() => {
        try{

        }catch(error){
            console.error(error.message);
        }
    }

}