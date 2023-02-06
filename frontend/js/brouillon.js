/*

<!-- Lists here -->
                <article class="list__container" dataset-list-id="">
                    <div class="list__header">
                        <div class="list__header--title">
                            <h2> Title list 1</h2>
                        </div>

                        <div class="list__header--delete">
                            <a href="#"> Delete list </a>
                        </div>
                    </div>

                    <div class="cards__container">
                        <!--card-->
                        <section class="card" dataset-card-id="">
                            
                            <div class="tag__container">
                                <section class="tag" dataset-tag-id="">
                                    <span class="tag__name">Tag</span>
                                </section>
                                <section class="tag" dataset-tag-id="">
                                    <span class="tag__name">Tag</span>
                                </section>
                            </div>

                            <div class="card__title">
                                Card 1
                            </div>

                            <div class="card__buttons">
                                <div class="card__button--edit">
                                    <a href="#"> Edit </a>
                                </div>

                                <div class="card__button--delete">
                                    <a href="#"> Delete </a>
                                </div>
                            </div>
                        </section>
                        <!-- End card -->

                        <section class="card" dataset-card-id="">
                            <div class="card__title">
                                Card 1
                            </div>

                            <div class="card__buttons">
                                <div class="card__button--edit">
                                    <a href="#"> Edit </a>
                                </div>

                                <div class="card__button--delete">
                                    <a href="#"> Delete </a>
                                </div>
                            </div>
                        </section>

                        <section class="card" dataset-card-id="">
                            <div class="card__title">
                                Card 1
                            </div>

                            <div class="card__buttons">
                                <div class="card__button--edit">
                                    <a href="#"> Edit </a>
                                </div>

                                <div class="card__button--delete">
                                    <a href="#"> Delete </a>
                                </div>
                            </div>
                        </section>

                        <section class="card" dataset-card-id="">
                            <div class="card__title">
                                Card 1
                            </div>

                            <div class="card__buttons">
                                <div class="card__button--edit">
                                    <a href="#"> Edit </a>
                                </div>

                                <div class="card__button--delete">
                                    <a href="#"> Delete </a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- End list -->
                </article>


class TagDOM extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(tagTemplate.content.cloneNode(true));
    }

    connectedCallback(){
        window.addEventListener("click", (event) => {
            console.log(event);
        })
    }

}

const main = document.querySelector("main");
const test = new TagDOM();
main.append(test);







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




*/