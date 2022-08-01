// data is being pulled from customers.js

const container = document.querySelector('#container');

function showCustomers(customerArray) {
    for(let customerInd of customerArray) {
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer");

        // image
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("photo");
        let picture = document.createElement("img");
        picture.src = customerInd.picture.large;
        imageDiv.appendChild(picture);
        customerDiv.appendChild(imageDiv);

        // name
        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        let firstName = customerInd.name.first;
        let lastName = customerInd.name.last;
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1); // capitalize first letter
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        nameDiv.innerText = `${firstName} ${lastName}`;
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
        let stateAbr = nameToAbbr(customerInd.location.state); // using states.js
        address2Div.innerText = `${customerInd.location.city}, ${stateAbr} ${customerInd.location.postcode}`;
        customerDiv.appendChild(address2Div);

        // dob
        let dobDiv = document.createElement("div");
        dobDiv.classList.add("dob");
        dobDiv.innerText = "DOB: " + moment(customerInd.dob.date).format('ll'); // using moment.js
        customerDiv.appendChild(dobDiv);

        // startDate
        let startDateDiv = document.createElement("div");
        startDateDiv.classList.add("startDate");
        startDateDiv.innerText = "Customer since: " + moment(customerInd.registered.date).format('ll'); // using moment.js
        customerDiv.appendChild(startDateDiv);

        // append customerDiv to container
        container.appendChild(customerDiv);
    }
}

showCustomers(customers);