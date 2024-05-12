

// const ImageCard = ({ photo }) => {
//   const { name, image, description } = photo;
//   return (
//     <div className="card w-96 glass">
//       <figure><img src={image} alt="Food Image"/></figure>
//       <div className="card-body">
//         <h2 className="card-title">{name}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;



// const ImageCard = ({ photo }) => {
//   const { name, image, description } = photo;
//   return (
//     <div className="relative w-96 glass overflow-hidden rounded-lg transition-transform transform-gpu hover:scale-105">
//       <figure>
//         <img src={image} alt="Food Image" className="w-full h-auto"/>
//       </figure>
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">{name}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;


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
        <img src={image} alt="Food Image" className="w-full h-auto"/>
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
