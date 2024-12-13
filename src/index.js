// Array de produtos
const produtos = [
    {
        nome: "Café Arábica com Natas",
        descricao: "Um clássico requintado, com grãos torrados a 50º e uma generosa camada de nata.",
        preco: "5,00",
        imagem: "assets/images/produto1.jpeg"
    },
    {
        nome: "Cappuccino",
        descricao: "A perfeita combinação de café espresso, leite vaporizado e espuma de leite.",
        preco: "6,00",
        imagem: "assets/images/produto2.jpg"
    },
    {
        nome: "Long Coffee",
        descricao: "Um café longo e suave, ideal para uma pausa relaxante.",
        preco: "4,00",
        imagem: "assets/images/produto3.jpg"
    },
    // Adicione mais produtos conforme necessário
];

// Função para renderizar produtos na página
function renderizarProdutos() {
    const produtosContainer = document.querySelector('.produtos');
    
    // Itera sobre cada produto e cria elementos HTML
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto'); // Adiciona a classe 'produto'
        
        // Adiciona o conteúdo HTML do produto
        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p>${produto.preco}</p>
            <input type="number" min="1" value="1"> <!-- Quantidade -->
            <button>Comprar</button>
        `;
        
        // Adiciona o produto ao container
        produtosContainer.appendChild(divProduto);
    });
}

// Chama a função para renderizar produtos
renderizarProdutos();
