let selectElem = document.querySelector('select');
let logo = document.querySelector('#byui-logo');
let border = document.querySelector('#content')
let university = document.querySelector('h2');
let background = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = 'black'
        logo.src ="images/byui-black.png";
        border.style.border = '1px solid #cccccc';
        university.style.color = '#4da3ff';
    }
    else {
        document.body.style.backgroundColor = 'white'
        logo.src="images/byui-logo-blue.jpeg";
        border.style.border = '1px solid darkgray';
        university.style.color = 'steelblue';
    }
}