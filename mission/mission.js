/*The example has #theme-select so I changed this here*/
let selectElem = document.querySelector('#theme-select');
let pageContent = document.body;
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    /*I put === here instead of == because our example had === and not == like the code we copied. I don't know if there is a difference but I was going off of the ponder assignment. */
    if (current === 'dark') {
        // code for changes to colors and logo
        pageContent.classList.add('dark')
        logo.src = 'images/byui-logo-white.png'
    } else {
        // code for changes to colors and logo
        pageContent.classList.remove('dark')
        logo.src = 'images/byu-logo.jpg';
    }
}