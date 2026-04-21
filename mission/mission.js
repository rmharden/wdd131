let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        document.body.footer.add('dark')
        logo.src="images/byui.png"
    } else {
        // code for changes to colors and logo
    }
}           
