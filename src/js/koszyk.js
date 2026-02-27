function addToKoszyk(produkt_id) {
    // Get items
    let cart = getKoszyk();

    // Add item to cart
    cart.push(produkt_id);

    // Save data to localStorage
    localStorage.setItem('koszyk', JSON.stringify(cart));

    renderujKoszyk();
};

function removeFromKoszyk(produkt_id) {
    let cart = getKoszyk()

    cart = cart.filter(id => id !== produkt_id);

    localStorage.setItem('koszyk', JSON.stringify(cart));

    renderujKoszyk();
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

    renderujKoszyk();
}

function renderujKoszyk() {
    const products = document.getElementById('products');
    const cart = getKoszyk();

    // clear elements!!
    products.innerHTML = "";

    cart.forEach(id => {
        const kafelek = `
            <div class="produkt_kafelek" data-id="${id}">
                <img src="img/kur.jpg" class="img">
                <span class="category">Moda</span>
                <span class="title">Produkt ID: ${id}</span>
                <span class="price">0.05 zł</span>
                <a href="#" class="buy del" onclick="removeFromKoszyk(${id})">Usuń</a>
            </div>
        `;
        
        // Dodajemy kafelek do strony
        products.innerHTML += kafelek;
    });
}