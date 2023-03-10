let navButton =document.getElementById("nav-button");
let arrow = document.getElementById('arrow');
let dropdown = document.getElementById('dropdown');

function toggleDropdown(){
    dropdown.classList.toggle('reveal');
    arrow.classList.toggle('arrow-flip');
}

navButton.onclick = toggleDropdown;

