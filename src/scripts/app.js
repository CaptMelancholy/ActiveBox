document.addEventListener('DOMContentLoaded', nav)




function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const nav__el = document.querySelector('.nav-list__el__link');
    console.log(nav.classList.contains("show"));
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    });
}



