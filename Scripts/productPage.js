ldocument.addEventListener('DOMContentLoaded', function () {
    let main = document.getElementById('products-content'); // Define 'main' for product page
    let items = JSON.parse(localStorage.getItem('product')) || [];
    let literaturebuy = JSON.parse(localStorage.getItem('literaturebuy')) || [];
  
    function add(index) {
      literaturebuy.push(items[index]);
      localStorage.setItem('literaturebuy', JSON.stringify(literaturebuy));
    }
  
    main.addEventListener('click', function () {
      if (event.target.hasAttribute('data-add')) {
        add(event.target.value);
      }
    });
  
    document.getElementById('searchBtn').addEventListener('click', function () {
      const searchInputValue = document.getElementById('searchInput').value.toLowerCase();
      let searchResults = items.filter(item => item.name.toLowerCase().includes(searchInputValue));
      main.innerHTML = searchResults.map(function (item, index) {
        return `
          <div class="card">
            <h3>${item.name}</h3>
            <p><img src="${item.url}" class="book-image img-fluid" alt="Book Image"></p>
            <p>${item.description}</p>
            <p>R${item.price}</p>
            <button class="btn btn-primary" value='${index}' data-add>Add to cart</button>
          </div>`;
      }).join('');
    });
  
    document.getElementById('sortBtn').addEventListener('click', function () {
      items.sort((a, b) => a.name.localeCompare(b.name));
      main.innerHTML = items.map(function (item, index) {
        return `
          <div class="card">
            <h3>${item.name}</h3>
            <p><img src="${item.url}" class="book-image img-fluid" alt="Book Image"></p>
            <p>${item.description}</p>
            <p>R${item.price}</p>
            <button class="btn btn-primary" value='${index}' data-add>Add to cart</button>
          </div>`;
      }).join('');
    });
  
    function add(index) {
      literaturebuy.push(items[index]);
      localStorage.setItem('literaturebuy', JSON.stringify(literaturebuy));
    }
  
    main.addEventListener('click', function () {
      if (event.target.hasAttribute('data-add')) {
        add(event.target.value);
      }
    });
  
    let a = items.filter(item => {
      return item.name == 'Things Fall Apart';
    });
  });