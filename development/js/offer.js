const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navBarLinks = document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

function computeLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;

    const interest = (amount * interest_rate * 0.1) * months;
    let payment = (interest + (months * 10)).toFixed();
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.querySelector('#payment').innerHTML = `Orientacyjna cena = ${payment}`

}


//carousell

function showSlides(n) {
    let i
    let slides = document.querySelectorAll('.carousel_item')
    let dots = document.querySelectorAll('.dot')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
}
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides((slideIndex += n))
}

function currentSlide(n) {
    showSlides((slideIndex = n))
}