const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // .hide is a class, but we don't need the . here because we already said it is a class with .classlsit.
    menu.classList.toggle('hide');
    // in the video, this was to change Menu into an x. I don't think the assignment needs this.
    // btn.classList.toggle('change');


}
