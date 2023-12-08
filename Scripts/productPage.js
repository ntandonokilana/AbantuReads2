let library = [];
let main = document.querySelector('main');
let product = JSON.parse(localStorage.getItem('items'))

// I added classes to this code for better styling using Bootstrap.
function displayProducts(products) {
  main.innerHTML = products.map(function (item, index) {
    return `
      <div class="card mb-3" style="max-width: 540px;"> 
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.url}" class="img-fluid" alt="Book Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <p class="card-text"><small class="text-muted">R${item.price}</small></p>
              <button class="btn btn-primary" value="${index}" data-add>Add to cart</button>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function add(index) {
  library.push(product[index]);
  localStorage.setItem('library', JSON.stringify(library));
}

main.addEventListener('click', function () {
  if (event.target.hasAttribute('data-add')) {
    add(event.target.value);
  }
});

//This piece of code listens to when the search button is clicked. 
//Then it checks what was typed into the search input and shows only the products that match that search. 
//For this happen, it uses a function called displayProducts that updates which products are shown on the screen.
document.getElementById('searchBtn').addEventListener('click', function () {
  let searchInput = document.getElementById('searchInput').value.toLowerCase();
  let filteredProducts = product.filter(item => item.name.toLowerCase().includes(searchInput) || item.description.toLowerCase().includes(searchInput));
  displayProducts(filteredProducts);
});


//sort button functionality attempt. This code listens and sorts/displays items based on the item's prices as instructed by the rubric.
document.getElementById('sortBtn').addEventListener('click', function () {
  product.sort((a, b) => a.price - b.price); 
  displayProducts(product);
});

// This is for add to cart functionality.
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart in both the UI and local storage.
function updateCart() {
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach((item, index) => {
    let listItem = document.createElement('li');
    listItem.className = 'cart-item';
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>R${item.price}</span>
      <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})" >Remove</button>
    `;
    cartItemsContainer.appendChild(listItem);
  });

  // Save the updated cart to local storage.
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add an item to the cart.
function addToCart(index) {
  let selectedProduct = product[index];
  cart.push(selectedProduct);
  updateCart();
};

// Function to remove an item from the cart.
function removeFromCart(index) {
  cart.splice(index, 1)[0];
  updateCart();
}

// Add an event listener to the main container for adding and removing items from the cart.
main.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-add')) {
    addToCart(event.target.value);
  } else if (event.target.hasAttribute('data-remove')) {
    removeFromCart(event.target.getAttribute('data-remove'));
  }
});

// Call the updateCart function to display any existing items in the cart.
updateCart();

// This is to ensure all products are visible when the page is loaded
window.addEventListener('load', function () {
  displayProducts(product);
});

