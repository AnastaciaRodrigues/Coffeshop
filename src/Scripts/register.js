document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    // Aqui você pode adicionar lógica para enviar os dados para o servidor
    // Exemplo de envio usando fetch (ajuste a URL conforme necessário)
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            alert('Conta criada com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        } else {
            alert('Erro ao criar conta. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao criar conta. Tente novamente.');
    });
});
