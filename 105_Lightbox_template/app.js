// Obtain Lightbox element referances

let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let Lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

// create function

function openlightbox() {
    lightboxContainer.classList.add('display');
    lightbox.src =this.src;
}

// get reference

let coffeeImage = document.getElementById('coffeeImage')

// attach the openlighbox function to the image

coffeeImage.onclick = openlightbox;