const container = document.querySelector('#container');

function showCustomers(customerArray) {
    for(let customerInd of customerArray) {
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer");
        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.innerText = `${customerInd.name.first} ${customerInd.name.last}`;
        customerDiv.appendChild(nameDiv);
        container.appendChild(customerDiv);
    }
}

showCustomers(customers);