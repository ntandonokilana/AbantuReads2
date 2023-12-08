
// Here I creates a variable named bought.
// It retrieves a stored value from the local storage with the key 'library'(similarly to how I coded the product page to pull
// from the admin page but now Im doing it to pull from the product page to the checkout page) using localStorage.getItem('library').
// ('library') is the array I created on the product page.
// I used the JSON.parse to convert it into a JavaScript object.
// The resulting object is assigned to the variable I created which is bought.
let bought = JSON.parse(localStorage.getItem('cart')) || [];
// This line creates a variable named main.
// It uses the document.querySelector method to find the first HTML element in the document that matches the selector 'main'.
// The selected HTML element (in this case, the <main> element) is assigned to the variable main.
let main = document.querySelector('main');

//This is where I work on the main element in my checkout html page. It is also to get the items from the 'bought' variable 
// stored in the local storage. I am also using cards for earch of my items in the 'bought' variable. 
// I have done this by implementing Bootstrap. The .join is to join all the cards into a single string.
main.innerHTML = bought.map((items, index)=> {
    return `
    <div class="card mb-3" style="max-width: 540px;"> 
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${items.url}" class="img-fluid" alt="Book Image">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${items.name}</h5>
            <p class="card-text">${items.description}</p>
            <p class="card-text"><small class="text-muted">R${items.price}</small></p>
            <button class="btn btn-primary" value="${index}" data-add onclick='removeFromCart(${index})'>Clear</button>
          </div>
        </div>
      </div>
    </div>`;
}).join('');

function clearCart(){
  console.log("clear")
  bought = [];
}

//I created this function to add products in the 'bought' list. The index parameter is to determine the position of the product in the array.
//The second line of code is for it to add the selected product to the 'bought' list. Then the this line of code is to update 
// the selected items to the local storage.
function add(index) {5 
  bought.push(product[index, item]);
  localStorage.setItem('bought', JSON.stringify(bought));
}

// Here this code listens for when something in the 'main' area is clicked. It calls the function named add when 
// something with the 'data-add' tag in the 'main' area is clicked and advises what was clicked on.
main.addEventListener('click', function () {
  if (event.target.hasAttribute('data-add')) {
    add(event.target.value);
  }
});


