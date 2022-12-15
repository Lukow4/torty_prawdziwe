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

fetch("data/data.json")
.then(response => response.json())
.then(data => generateAddresses(data));