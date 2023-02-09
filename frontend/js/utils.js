const utilsModule = {
    // Change the value of 3000 if you are not running the API server on that PORT
    base_url: "http://localhost:3000",
    
    hide_modals: (event) => {
        event.preventDefault();
        event.target.closest(".modal").classList.add("hidden");
        event.target.closest("form").reset();
        document.querySelector(".modal__background").classList.add("hidden");
    }
}