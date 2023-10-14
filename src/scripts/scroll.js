$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    const header__content = document.querySelector(".header-content");
    let height = header__content.offsetHeight;
    if (scroll >= height) {
        header__content.classList.remove('border');
    } else {
        header__content.classList.add('border');
    }
});