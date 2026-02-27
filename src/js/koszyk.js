function addToKoszyk(produkt_id) {
    // Get items
    let cart = JSON.parse(localStorage.getItem('koszyk')) || [];

    // Add item to cart
    cart.push(produkt_id);

    // Save data to localStorage
    localStorage.setItem('koszyk', JSON.stringify(cart));

    return cart;
};

function pokazKoszyk() {
    const cart = JSON.parse(localStorage.getItem('koszyk')) || [];
    return cart;
};

function clearKoszyk() {
    localStorage.clear();
}