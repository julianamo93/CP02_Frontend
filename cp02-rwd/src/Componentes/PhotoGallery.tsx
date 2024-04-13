import React, { useState, useEffect } from 'react';

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      const data = await response.json();
      setPhotos(data.slice(0,12));
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      <h1>Photos</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo: any) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
