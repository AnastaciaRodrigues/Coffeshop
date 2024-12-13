// Adiciona um evento ao formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de autenticação simples
    if (username === 'user' && password === 'password') {
        alert('Login bem-sucedido!');
        window.location.href = 'index.html'; // Redireciona para a página principal
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

