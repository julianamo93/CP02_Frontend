import React from "react";

// componente Home, criado para melhor organização do código
// div container para a box e div home com conteúdos CSS
const Home = () => {
    return (
        <div className="container">
            <div className="home">
                <h2>CheckPoint 02 - Responsive Web Development</h2>
                <p>
                    Objetivo: Desenvolver uma aplicação utilizando React, TypeScript e TailwindCSS. <br />
                    A aplicação deve consumir dados da API pública JSONPlaceholder (<a href="https://jsonplaceholder.typicode.com/" className="text-blue-500 hover:underline">https://jsonplaceholder.typicode.com/</a>) utilizando fetch. <br />
                    O sistema deverá ter um layout organizado com um menu de navegação e pelo menos três telas, cada uma acessada por rotas específicas. <br />
                    <img src="https://gifs.eco.br/wp-content/uploads/2022/11/gifs-de-programador-17.gif" alt="Programador" />
                </p>
            </div>
        </div>
    );
};

export default Home;
