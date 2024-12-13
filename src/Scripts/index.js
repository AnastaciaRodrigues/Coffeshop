// src/scripts/index.js

// Função para mostrar uma mensagem de boas-vindas
function showWelcomeMessage() {
    alert("Bem-vindo ao CoffeeLab! Explore nossos produtos.");
}

// Adiciona um evento de clique ao botão com id 'welcome-button'
document.addEventListener("DOMContentLoaded", function() {
    const welcomeButton = document.getElementById("welcome-button");
    if (welcomeButton) {
        welcomeButton.addEventListener("click", showWelcomeMessage);
    }
});
