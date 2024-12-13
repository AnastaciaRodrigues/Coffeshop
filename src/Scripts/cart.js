
// Inicializa um carrinho vazio
let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(item) {
    cart.push(item);
    renderCart(); // Atualiza a visualização do carrinho
}

// Função para renderizar os itens do carrinho
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpa itens existentes

    // Adiciona cada item ao carrinho
    cart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item; // Exibe o nome do item
        cartItemsContainer.appendChild(itemElement);
    });
}

// Evento para finalizar a compra
document.getElementById('checkout-button').addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Compra finalizada!');
        cart = []; // Limpa o carrinho após a compra
        renderCart(); // Atualiza a visualização do carrinho
    } else {
        alert('O carrinho está vazio!');
    }
});





addToCart('Café Arabica com Natas');
addToCart('Cappucino');
addToCart('Long coffe');
addToCart('Latte Caramel');
addToCart('Coffe sem lactose');
addToCart('Coffe doce de leite');
addToCart('Coffe Beirão');
addToCart('Coffe Natalicio');
