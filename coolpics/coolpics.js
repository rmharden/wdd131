const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // .hide is a class, but we don't need the . here because we already said it is a class with .classlsit.
    menu.classList.toggle('hide');

}
