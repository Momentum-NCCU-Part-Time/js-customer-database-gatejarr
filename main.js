//  Is this necessay?
  import {customers} from customers.js;

/*  Sample code from class
function customerDirectoryCard(customer) {
    return <div class="firstName"> $</div>
} */

/* Sample code from class
let database = customers.map((customer) => customerDirectoryCard(customer))
document.querySelector('.container').innerHTML = database; */

const firstName = customers.name.first;
console.log(firstName);