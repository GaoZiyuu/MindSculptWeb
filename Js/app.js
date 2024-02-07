var nav = document.getElementById("nav");

// Set position to sticky when scroll position is at more than 50px
window.onscroll = function() {
  if (window.scrollY > 50) {
    nav.style.position = "sticky";
  } else {
    nav.style.position = "absolute";
  }
};