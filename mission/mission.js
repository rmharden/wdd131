let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let border = document.querySelector('#content')
let university = document.querySelector('h2');
let background = document.querySelector()

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.src ="images/byui-black.png";
        border.style.border = '1px solid #cccccc';
        university.style.color = '#4da3ff';
    }
    else {
        logo.src="images/byui-logo-blue.jpeg";
        border.style.border = '1px solid darkgray';
        university.style.color = 'steelblue';
    }
}