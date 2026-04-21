let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.getElementById("images/byui-logo").src ="byui-black.png";
    }
    else {
        document.getElementById("images/byui-logo").src ="byui-logo-blue.png";
    }
}