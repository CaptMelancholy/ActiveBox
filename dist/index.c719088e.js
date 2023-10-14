document.addEventListener("DOMContentLoaded", nav);
function nav() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const nav__el = document.querySelector(".nav-list__el__link");
    console.log(nav.classList.contains("show"));
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("show");
    });
}
function clickURL() {
    const nav = document.querySelector(".nav");
    nav.classList.remove("show");
}

//# sourceMappingURL=index.c719088e.js.map
