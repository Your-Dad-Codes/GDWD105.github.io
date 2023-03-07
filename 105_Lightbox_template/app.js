// Obtain Lightbox element referances

let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

// create function

function openlightbox() {
    lightboxContainer.classList.add('display');
    lightbox.src =this.src;
}

function closelightbox() {
    lightboxContainer.classList.remove('display')
    lightbox.src=""
}
// get reference

let coffeeImage = document.getElementById('coffeeImage');
let coffeeImage2 = document.getElementById('coffeeImage2');
let coffeeImage3 = document.getElementById('coffeeImage3');
let coffeeImage4 = document.getElementById('coffeeImage4');
let coffeeImage5 = document.getElementById('coffeeImage5');
let coffeeImage6 = document.getElementById('coffeeImage6');
let coffeeImage7 = document.getElementById('coffeeImage7');
let coffeeImage8 = document.getElementById('coffeeImage8');
let coffeeImage9 = document.getElementById('coffeeImage9');
let coffeeImage10 = document.getElementById('coffeeImage10');
let coffeeImage11 = document.getElementById('coffeeImage11');
// attach the openlighbox function to the image

coffeeImage.onclick = openlightbox;
coffeeImage2.onclick = openlightbox;
coffeeImage3.onclick = openlightbox;
coffeeImage4.onclick = openlightbox;
coffeeImage5.onclick = openlightbox;
coffeeImage6.onclick = openlightbox;
coffeeImage7.onclick = openlightbox;
coffeeImage8.onclick = openlightbox;
coffeeImage9.onclick = openlightbox;
coffeeImage10.onclick = openlightbox;
coffeeImage11.onclick = openlightbox;
// light box closer//

lightboxCloser.onclick = closelightbox;

