import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Componente criado para consumo de API, retornando posts
// useNavigate aplicado para retorno a página anterior
// botão para rolar a página ao topo aplicado
const PostList: React.FC = () =>{
    const [posts, setPosts] = useState([]);
    const navegacao = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Erro ao buscar posts:', error);
        }
    };

    const handleBackButton = () => {
        navegacao(-1);
    };

    {/* Uso de handleScrollToTop, para que a página role da parte inferior para a superior */}
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div>
            <div className="flex justify-center my-4">
                <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBackButton}>Voltar</button>
            </div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center fixed bottom-10 right-10">
                <button className="bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-full" onClick={handleScrollToTop}>Voltar ao Topo</button>
            </div>
        </div>
    );
};

export default PostList;
