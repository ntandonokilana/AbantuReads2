let library = [];
let main = document.querySelector('main');
let product = JSON.parse(localStorage.getItem('items'))

// I added classes to this code for better styling using Bootstrap.
main.innerHTML = product.map(function (item, index) {
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

function add(index) {
  library.push(product[index]);
  localStorage.setItem('library', JSON.stringify(library));
}

main.addEventListener('click', function () {
  if (event.target.hasAttribute('data-add')) {
    add(event.target.value);
  }
});
