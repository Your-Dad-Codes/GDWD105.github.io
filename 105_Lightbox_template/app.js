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

// get reference

let coffeeImage = document.getElementById('coffimg')
let coffeeImage2 = document.getElementById('coffimg2')
let coffeeImage3 = document.getElementById('coffimg3')
let coffeeImage4 = document.getElementById('coffimg4')
let coffeeImage5 = document.getElementById('coffimg5')
let coffeeImage6 = document.getElementById('coffimg6')
let coffeeImage7 = document.getElementById('coffimg7')
let coffeeImage8 = document.getElementById('coffimg8')
let coffeeImage9 = document.getElementById('coffimg9')
let coffeeImage10 = document.getElementById('coffimg10')
let coffeeImage11 = document.getElementById('coffimg11')
// attach the openlighbox function to the image

coffeeImage.onclick = openlightbox;