document.getElementById('searchBtn').addEventListener('click', function (){
    // This is to receive the value for search input
    const searchInputValue = document.getElementById('searchInput').value;
    
    // Perform some action with the search input value (e.g., alert for demonstration)
    alert('Searching for: products ' + searchInputValue);
});

document.getElementById('sortBtn').addEventListener('click', function () {
    // Perform some action when the sort button is clicked (e.g., alert for demonstration)
    alert('Sort items in alphabetical order')
});

let literaturebuy = []; // this is the empty array to put the purchased items into.
items = JSON.parse(localStorage.getItem('item'))

main.innerHTML = items.map(function(item,index){
    return `
        <div>
            <h2>${item.name}</h2>
            <p><img src = '${item.url}'></p>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button value = '${index}' data-add>Add to cart</button>
        </div>
    `
}).join('')

function add(index){
    purchased.push(items[index])
    localStorage.setItem('literaturebuy', JSON.stringify(purchased))
}

main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
        add(event.target.value)
    }
})

let a = items.filter(item => {
    return item.name == 'Things Fall Apart'
})
