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
        document.body.style.color = "#e0e0e0"
        university.style.color = '#4da3ff';
    }
    else {
        document.body.style.backgroundColor = 'white'
        logo.src="images/byui-logo-blue.jpeg";
        border.style.border = '1px solid darkgray';
        document.body.style.color = "black"
        university.style.color = 'steelblue';
    }
}