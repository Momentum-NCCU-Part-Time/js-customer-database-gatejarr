let customerContainer = document.querySelector(".container");
function customerDirectoryCard(customer) {
  let customerCard = document.createElement("div");
  let customerPic = document.createElement("img");
  customerPic.src = `${customer.picture.large}`;
  let customerName = document.createElement("h3");
  customerName.innerText = `${customer.name.first} ${customer.name.last}`;
  let customerEmail = document.createElement("mailto");
  customerEmail.innerText = `${customer.email}`;
  let addressNumName = document.createElement("p");
  addressNumName.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
  let addressCityStateZip = document.createElement("p");
  addressCityStateZip.innerText = `${customer.location.city}, ${nameToAbbr(
    customer.location.state
  )} ${customer.location.postcode}`;
  let dateOfBirth = document.createElement("p");
  dateOfBirth.innerText = `DOB: ${moment(customer.dob.date).format(
    "MMM D, YYYY"
  )}`;
  let customerSince = document.createElement("p");
  customerSince.innerText = `Customer Since: ${moment(
    customer.registered.date
  ).format("MMM D, YYYY")}`;
  customerCard.appendChild(customerPic);
  customerCard.appendChild(customerName);
  customerCard.appendChild(customerEmail);
  customerCard.appendChild(addressNumName);
  customerCard.appendChild(addressCityStateZip);
  customerCard.appendChild(dateOfBirth);
  customerCard.appendChild(customerSince);
  customerContainer.appendChild(customerCard);
}
let database = customers.map((customer) => customerDirectoryCard(customer));
