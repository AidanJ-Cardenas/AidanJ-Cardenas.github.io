let bag = JSON.parse(localStorage.getItem('AJ_VAULT_CART')) || {};

function updateBagCount() {
    let count = 0;
    for (let item in bag) { count += bag[item].qty; }
    const display = document.getElementById('bag-count');
    if(display) display.innerText = count;
}

function addToBag(name, price) {
    name = name.toUpperCase();
    if (bag[name]) { bag[name].qty += 1; } 
    else { bag[name] = { price: price, qty: 1 }; }
    localStorage.setItem('AJ_VAULT_CART', JSON.stringify(bag));
    updateBagCount();
    alert("Formula Synchronized to Manifest.");
}

window.onload = updateBagCount;