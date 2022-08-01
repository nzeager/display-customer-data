const container = document.querySelector('#container');

function showCustomers(customerArray) {
    for(let customerInd of customerArray) {
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer");

        // image
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("photo");
        let picture = document.createElement("img");
        picture.src = customerInd.picture.thumbnail;
        imageDiv.appendChild(picture);
        customerDiv.appendChild(imageDiv);

        // name
        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.innerText = `${customerInd.name.first} ${customerInd.name.last}`;
        customerDiv.appendChild(nameDiv);
        
        // email
        let emailDiv = document.createElement("div");
        emailDiv.classList.add("email");
        emailDiv.innerText = customerInd.email;
        customerDiv.appendChild(emailDiv);
        
        // address1
        let address1Div = document.createElement("div");
        address1Div.classList.add("address1");
        address1Div.innerText = `${customerInd.location.street.number} ${customerInd.location.street.name}`;
        customerDiv.appendChild(address1Div);

        // address2
        let address2Div = document.createElement("div");
        address2Div.classList.add("address2");
        let stateAbr = nameToAbbr(customerInd.location.state);
        address2Div.innerText = `${customerInd.location.city}, ${stateAbr} ${customerInd.location.postcode}`;
        customerDiv.appendChild(address2Div);

        // dob
        let dobDiv = document.createElement("div");
        dobDiv.classList.add("dob");
        dobDiv.innerText = customerInd.dob.date;
        customerDiv.appendChild(dobDiv);

        // startDate
        let startDateDiv = document.createElement("div");
        startDateDiv.classList.add("startDate");
        startDateDiv.innerText = customerInd.registered.date;
        customerDiv.appendChild(startDateDiv);

        // append customerDiv to container
        container.appendChild(customerDiv);
    }
}

showCustomers(customers);