// creating an empty array
let items = [];

// Here I created an Object in order to create a constructor function to list my items.
function product(name, price, description, url) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.url = url;
}

// Creating a constructor function.
let product1 = new product("Things Fall Apart", 349.00, " by Chinua Achebe", "https://i.postimg.cc/Ssw2w5Jn/Things-Fall-Apart.jpg");
let product2 = new product("The Hairdresser of Harare", 299.00, "by Tendai Hunchu", "https://i.postimg.cc/RhSLyrMx/The-hairdresser-of-Harare.jpg");
let product3 = new product("Coconut", 249.99, "by Kopano Matlwa", "https://i.postimg.cc/wBJKLhmZ/Coconut.jpg");
let product4 = new product("You Have to Be Gay to Know God", 245.00, " by Siya Khumalo", "https://i.postimg.cc/vB4dFKXk/YHTBGTKG-Siya-Khumalo.png");
let product5 = new product("Period Pains", 225.00, "by Kopano Matlwa", "https://i.postimg.cc/1z6pCR1j/period-pain.jpg");
let product6 = new product("Freshwater", 295.00, "by Akwaeke Emezi", "https://i.postimg.cc/KzCjdB77/freshwater-akwaeke-emezi.jpg");

// Pushing items to the empty array.  
items.push(product1, product2, product3, product4, product5, product6);

// Changing string to an array.
localStorage.setItem('items', JSON.stringify(items))
items = JSON.parse(localStorage.getItem('items'))

let table = document.querySelector('table')

function displayProducts() {
  let products = items.map(function (item, position) {
    return `
      <tr>
        <td>${item.name}</td>
        <td>R${item.price}</td>
        <td>${item.description}</td>
        <td><img src="${item.url}" class="img-fluid" style="max-width: 100px;"></td>
        <td><button class="btn btn-warning edit">Edit</button></td>
        <td><button class="btn btn-danger delete" data-position='${position}'>Delete</button></td>
      </tr>`;
  });

  table.innerHTML = products.join('');
}

// styling on javascript.
table.classList.add('table', 'table-striped', 'table-hover'); // Add Bootstrap table classes
displayProducts();

function remove(position) {
  items.splice(position, 1);
  different();
  displayProducts();
}

table.addEventListener('click', function () {
  if (event.target.classList.contains('delete')) {
    remove(event.target.dataset.position);
  }
});

function different() {
  localStorage.setItem('items', JSON.stringify(items));
  items = JSON.parse(localStorage.getItem('items')) || [];
} 

//The following is my code for the Edit button
function openModal(index) {
  let modal = document.getElementById('modal');
  
  let span = document.getElementsByClassName('close')[0];
  let product = products[index];
  modal.style.display = 'block';
  // the inputs to be refilled in the modal
  document.getElementById('editName').value = product.name;
  document.getElementById('editDescription').value = product.description;
  document.getElementById('editPrice').value = product.price;
  // this removes the modal(X)
  span.onclick = function() {
      modal.style.display = 'none';
  };
  // Close the modal when the user clicks outside the modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };
  // Update the product details when the user submits the form
  document.getElementById('editForm').addEventListener('submit', function(event) {
      event.preventDefault();
      product.name = document.getElementById('editName').value;
      product.description = document.getElementById('editDescription').value;
      product.price = document.getElementById('editPrice').value;
      // Close the modal
      modal.style.display = 'none';
      localStorage.setItem('products', JSON.stringify(products)); // Update local storage
      displayProducts();
  });
}
// Event listener for the edit button open the modal to edit certain products
table.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit')) {
      let index = event.target.value;
      openModal(index);
  }
});