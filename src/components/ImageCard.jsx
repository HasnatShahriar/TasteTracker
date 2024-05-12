import { useState } from 'react';

const ImageCard = ({ photo }) => {
  const { name, image, description } = photo;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-96 glass overflow-hidden rounded-lg transition-transform transform-gpu hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img src={image} alt="Food Image" className="w-full h-96"/>
      </figure>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
