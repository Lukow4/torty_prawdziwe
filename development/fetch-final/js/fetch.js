const addressList = document.querySelector("#address_list");

const generateAddresses = (data) => {
  data.products.forEach((address) => {
    const newAddressDiv = document.createElement('div');
    newAddressDiv.classList.add();
    const addressHTML = `
    <p>${address.product}</p>
    <p>${address.price}</p>
    <p>${address.stock}</p>
    `;
    newAddressDiv.innerHTML = addressHTML;
    addressList.appendChild(newAddressDiv);
  });
};
console.log("test");
fetch("./data.json", { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }})
.then(response => response.json())
    .then(res =>  console.log(res))
//.then(data => generateAddresses(data))
.catch(err => console.log(err));