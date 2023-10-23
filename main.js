  let customerContainer = document.querySelector('.container');
  function customerDirectoryCard(customer){
    let customerCard = document.createElement('div');
    let customerPic = document.createElement('img');
    customerPic.src = `${customer.picture.large}`;
    let customerName = document.createElement ('h3');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerPic);
    customerCard.appendChild(customerName);
    customerContainer.appendChild(customerCard);
}
  let database = customers.map((customer) => customerDirectoryCard(customer))