let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let border = document.querySelector('#content')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.src ="images/byui-black.png";
        border.style.border = '1px solid white';
    }
    else {
        logo.src="images/byui-logo-blue.jpeg";
        border.style.border = '1px solid darkgray';
    }
}