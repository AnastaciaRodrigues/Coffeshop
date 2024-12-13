// src/App.js
import React from 'react';
import '.style.css'; // Importa o arquivo de estilos
import minhaImagem from './minha-imagem.jpg'; // Importa a imagem

function App() {
  return (
    <div className="container">
      <h1>Minha Landing Page</h1>
      <img src={minhaImagem} alt="Minha imagem" />
      <p>Este é um exemplo de uma landing page com imagem e estilos personalizados.</p>
    </div>
  );
}

export default App;

// Este arquivo pode ser utilizado para funcionalidades adicionais
// ou para integração com outras bibliotecas, se necessário.

// Exemplo de código que poderia ser adicionado:
// import { someFunction } from './anotherModule';
// someFunction();
