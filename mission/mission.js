let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.src ="images/byui-black.png";
    }
    else {
        logo.src="images/byui-logo-blue.jpeg";
    }
}