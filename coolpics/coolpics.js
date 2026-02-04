const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // .hide is a class, but we don't need the . here because we already said it is a class with .classlsit.
    menu.classList.toggle('hide');
    // in the video, this was to change Menu into an x. I don't think the assignment needs this.
    // btn.classList.toggle('change');
}

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
