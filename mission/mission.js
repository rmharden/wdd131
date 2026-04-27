let selectElem = document.querySelector('#theme-select');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.classList.add('dark')
        logo.src ="images/byui-black2.png";
    }
    else {
        document.body.classList.remove('dark');
        logo.src="images/byui-logo-blue.jpeg";
    }
}