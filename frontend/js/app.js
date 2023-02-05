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
        list.style.height = `${window.innerHeight - 50}px`;
        list.classList.add("overflow-y");
    }
}

