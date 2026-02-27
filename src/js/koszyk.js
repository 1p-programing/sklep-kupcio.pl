function addToKoszyk(produkt_id) {
    // Get items
    let cart = getKoszyk();

    // Add item to cart
    cart.push(produkt_id);

    // Save data to localStorage
    localStorage.setItem('koszyk', JSON.stringify(cart));
};

function removeFromKoszyk(produkt_id) {
    let cart = getKoszyk()

    cart = cart.filter(id => id !== produkt_id);

    localStorage.setItem('koszyk', JSON.stringify(cart));
}

function getKoszyk() {
    const cart = JSON.parse(localStorage.getItem('koszyk')) || [];
    return cart;
};

function clearKoszyk() {
    let user = confirm("Are you siure to delete entire koszyk??");
    if (user) {
        localStorage.clear();
    }
}