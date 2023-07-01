const togglebar = document.querySelector(".toggle");
const menus = document.querySelector(".activate");

togglebar.addEventListener("click", () => {
    togglebar.classList.toggle("active");
    menus.classList.toggle("active");
})