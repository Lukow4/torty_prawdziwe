//carousell
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".carousel_item");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//navi
const toggleButton = document.getElementsByClassName("toggle_button")[0];
const navBarLinks = document.getElementsByClassName("navbar_links")[0];
toggleButton.addEventListener("click", ()=>{
    navBarLinks.classList.toggle("active");
});

//# sourceMappingURL=index.3d250e50.js.map
