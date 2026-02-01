/*targets our elements*/
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
/*This listens for the user to click inside the gallery. When clicked, openModal function will get called.*/
/*When we call openModal, it didn't send in a parameter.*/
gallery.addEventListener('click', openModal);

/*The e is an event parameter. */
function openModal(e) {
    /*This is not showing me anything in the console*/
    console.log(e.target);

// Code to show modal  - Use event parameter 'e'   
    const img = e.target;
    const src = img.getAttribute('src');
    const at = img.getAttribute('alt');
}
// Close modal on button click (the close button)
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image. This closes if they click on the dialog area itself.
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          