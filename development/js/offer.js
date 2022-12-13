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