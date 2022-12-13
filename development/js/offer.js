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

    let payment = (interest + (months * 10)).toFixed(); //calculate monthly payment

    //regedit to add a comma after every three digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//"innerHTML" will help you to see the information in the webpage
    document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`

}