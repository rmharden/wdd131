
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        pageContent.classList.add('dark')
        logo.src = 'images/byu'
    } else {
        // code for changes to colors and logo
    }
}