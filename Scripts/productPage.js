let felakuti = [];

let main = document.querySelector('main'); // Define 'main' for product page
let product = JSON.parse(localStorage.getItem('items'))// Pulling items from local storage

main.innerHTML = product.map(function (item,index) {
  console.log(item)
  console.log(index);
  return `
    <div class="card">
      <h3>${item.name}</h3>
      <p><img src="${item.url}" class="book-image img-fluid" alt="Book Image"></p>
      <p>${item.description}</p>
      <p>R${item.price}</p>
      <button class="btn btn-primary" value='${index}' data-add>Add to cart</button>
    </div>`;
}).join('');

function add(index) {
  felakuti.push(items[index]);
  localStorage.setItem('felakuti', JSON.stringify(felakuti));
}

main.addEventListener('click', function () {
  if (event.target.hasAttribute('data-add')) {
    add(event.target.value);
  }
});