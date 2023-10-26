let customerContainer = document.querySelector(".container");

function customerDirectoryCard(customer) {
  let customerCard = document.createElement("div");

  let customerPic = document.createElement("img");
  customerPic.src = customer.picture.large;

  let customerName = document.createElement("h3");
  customerName.innerText =
    customer.name.first.charAt(0).toUpperCase() +
    customer.name.first.slice(1) +
    " " +
    customer.name.last.charAt(0).toUpperCase() +
    customer.name.last.slice(1);

  let customerEmail = document.createElement("a");
  customerEmail.innerText = customer.email;
  customerEmail.href="mailto:" + customerEmail;

  let addressNumName = document.createElement("p");
  addressNumName.innerText =
    customer.location.street.number + " " + customer.location.street.name;
  addressNumName.classList.add("address");

  let addressCityStateZip = document.createElement("p");
  addressCityStateZip.innerText =
    customer.location.city +
    ", " +
    nameToAbbr(customer.location.state) +
    " " +
    customer.location.postcode;

  let dateOfBirth = document.createElement("p");
  dateOfBirth.innerText =
    "DOB: " + moment(customer.dob.date).format("MMM D, YYYY");
  dateOfBirth.classList.add("date");

  let customerSince = document.createElement("p");
  customerSince.innerText =
    "Customer Since: " + moment(customer.registered.date).format("MMM D, YYYY");

  customerContainer.appendChild(customerCard);
  customerCard.appendChild(customerPic);
  customerCard.appendChild(customerName);
  customerCard.appendChild(customerEmail);
  customerCard.appendChild(addressNumName);
  customerCard.appendChild(addressCityStateZip);
  customerCard.appendChild(dateOfBirth);
  customerCard.appendChild(customerSince);
}
let database = customers.map((customer) => customerDirectoryCard(customer));
