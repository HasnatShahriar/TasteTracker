// import { useContext } from "react";
// import { useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../provider/AuthProvider";
// import ImageCard from "../../components/ImageCard";

// const Gallery = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [feedback, setFeedback] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const { user } = useContext(AuthContext)

//   const allImages = useLoaderData()
//   console.log(allImages);

//   const handleAddClick = () => {
//     // Check if user is logged in, if not, redirect to login page
//     const isLoggedIn = true; // Replace with your authentication logic
//     if (!isLoggedIn) {
//       return <Link to="/login" />;
//     }
//     setModalOpen(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const description = form.description.value;
//     const image = form.photo.value;
//     const newFeedback = { name, description, image }
//     console.log(newFeedback);


//     // send data to the server
//     fetch(`${import.meta.env.VITE_API_URL}/images`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(newFeedback)
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: 'Success!',
//             text: 'Food Added Successfully',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           })
//         }
//       })
//     // Close the modal after submission
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-center bg-gray-200 p-4">Gallery</h1>

//       <div className="flex justify-center mt-8">
//         {/* Add Button */}
//         <button
//           onClick={handleAddClick}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Add
//         </button>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Add Experience</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   User's Name
//                 </label>
//                 <input
//                   type="text"
//                   // value="John Doe" // User's name (read-only)
//                   defaultValue={user?.displayName}
//                   name="name"
//                   readOnly
//                   className="border border-gray-400 p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Feedback or Experience Description
//                 </label>
//                 <textarea
//                   value={feedback}
//                   name="description"
//                   onChange={(e) => setFeedback(e.target.value)}
//                   className="border border-gray-400 p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   value={imageUrl}
//                   name="photo"
//                   onChange={(e) => setImageUrl(e.target.value)}
//                   className="border border-gray-400 p-2 w-full"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={() => setModalOpen(false)}
//                   className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Gallery Section */}
//       <div className="grid grid-cols-3 gap-4 mt-8">
//         {
//           allImages.map((photo, index) => <ImageCard key={index} photo={photo} />)
//         }
//       </div>
//     </div>
//   );
// };

// export default Gallery;



// import { useContext } from "react";
// import { useState } from "react";
// import {  useLoaderData, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../provider/AuthProvider";
// import ImageCard from "../../components/ImageCard";

// const Gallery = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [feedback, setFeedback] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const allImages = useLoaderData();
//   console.log(allImages);

//   const handleAddClick = () => {
//     // Check if user is logged in, if not, redirect to login page
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     setModalOpen(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const description = form.description.value;
//     const image = form.photo.value;
//     const newFeedback = { name, description, image };
//     console.log(newFeedback);

//     // send data to the server
//     fetch(`${import.meta.env.VITE_API_URL}/images`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(newFeedback)
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: 'Success!',
//             text: 'Food Added Successfully',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           });
//         }
//       });
//     // Close the modal after submission
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-center bg-gray-200 p-4">Gallery</h1>

//       <div className="flex justify-center mt-8">
//         {/* Add Button */}
//         <button
//           onClick={handleAddClick}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Add
//         </button>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Add Experience</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   User's Name
//                 </label>
//                 <input
//                   type="text"
//                   // value="John Doe" // User's name (read-only)
//                   defaultValue={user?.displayName}
//                   name="name"
//                   readOnly
//                   className="border border-gray-400 p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Feedback or Experience Description
//                 </label>
//                 <textarea
//                   value={feedback}
//                   name="description"
//                   onChange={(e) => setFeedback(e.target.value)}
//                   className="border border-gray-400 p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   value={imageUrl}
//                   name="photo"
//                   onChange={(e) => setImageUrl(e.target.value)}
//                   className="border border-gray-400 p-2 w-full"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={() => setModalOpen(false)}
//                   className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Gallery Section */}
//       <div className="grid grid-cols-3 gap-4 mt-8">
//         {allImages.map((photo, index) => (
//           <ImageCard key={index} photo={photo} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;




// Import necessary modules
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import ImageCard from "../../components/ImageCard";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const allImages = useLoaderData();
  console.log(allImages);

  const handleAddClick = () => {
    // Check if user is logged in, if not, redirect to login page
    if (!user) {
      navigate("/login");
      return;
    }
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.photo.value;
    const newFeedback = { name, description, image };
    console.log(newFeedback);

    // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Food Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        }
      });
    // Close the modal after submission
    setModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gray-200 p-4">Gallery</h1>

      <div className="flex justify-center mt-8">
        {/* Add Button */}
        <button
          onClick={handleAddClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Experience</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  User's Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="name"
                  readOnly
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Feedback or Experience Description
                </label>
                <textarea
                  value={feedback}
                  name="description"
                  onChange={(e) => setFeedback(e.target.value)}
                  className="border border-gray-400 p-2 w-full h-32 resize-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  name="photo"
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-36 mt-8">
        {allImages.map((photo, index) => (
          <ImageCard key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
