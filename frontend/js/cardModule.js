const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `

<!--card-->
    <section class="card" dataset-card-id="">
                            
        <div class="tag__container">
           
        </div>

 
        <h3 class="card__title"> Card 1 </h3>
     

        <div class="card__buttons">
            <div class="card__button--delete">
                <a href="#"> x </a>
            </div>
        </div>
    </section>
<!-- End card -->
`

const cardModule = {


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


}