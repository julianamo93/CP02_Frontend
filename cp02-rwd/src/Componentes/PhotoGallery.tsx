import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// componente criado para consumo de API
// componente que retorna as fotos no site
// aplicado useNavigate, para retornar a página anterior
const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const navegacao = useNavigate(); // Utilizando useNavigate para obter a função de navegação

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Falha ao buscar fotos.');
      }
      const data = await response.json();
      setPhotos(data.slice(0,12));
    } catch (error) {
      console.error('Erro ao carregar fotos:', error);
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

  return (
    <div>
        <div className="flex justify-center my-4">
          <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBackButton}>Voltar</button>
        </div>
        
        <h1>Photos</h1>
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo: any) => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center fixed bottom-10 right-10">
          <button className="bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-full" onClick={handleScrollToTop}>Voltar ao Topo</button>
        </div>
    </div>
  );
};

export default PhotoGallery;

