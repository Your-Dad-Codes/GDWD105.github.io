Get the elements with class="row"
var elements = document.getElementsByClassName("row");

// Declare a "loop" variable
var i;

// Full-width images
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}