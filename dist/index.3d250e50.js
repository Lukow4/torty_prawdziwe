"use strict";
//carousell
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".carousel_item");
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//navi
var toggleButton = document.getElementsByClassName("toggle_button")[0];
var navBarLinks = document.getElementsByClassName("navbar_links")[0];
toggleButton.addEventListener("click", function() {
    navBarLinks.classList.toggle("active");
});

//# sourceMappingURL=index.3d250e50.js.map
