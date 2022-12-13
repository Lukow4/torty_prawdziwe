const addressList = document.querySelector("#address-list");
const generateAddresses = (data)=>{
    data.products.forEach((address)=>{
        const newAddressDiv = document.createElement("div");
        newAddressDiv.classList.add("px-6", "pt-4", "pb-2");
        const addressHTML = `
    <p>${address.product}</p>
    <p>${address.price}</p>
    <p>${address.stock}</p>
    `;
        newAddressDiv.innerHTML = addressHTML;
        addressList.appendChild(newAddressDiv);
    });
};
fetch("data/data.json").then((response)=>response.json()).then((data)=>generateAddresses(data));

//# sourceMappingURL=stock.04743550.js.map
