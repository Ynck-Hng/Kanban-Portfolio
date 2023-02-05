const listTemplate = document.createElement("template");

listTemplate.innerHTML = `

 <!-- Lists here -->
                <article class="list__container" dataset-list-id="">
                    <div class="list__header">
                        <div class="list__header--title">
                            <h2> Title list 1</h2>
                        </div>
                        
                        <div class="list__header--delete">
                            <a href="#"> x </a>
                        </div>
                    </div>

                    <div class="cards__container">
                        
                    </div>
                    <!-- End list -->
                </article>

`