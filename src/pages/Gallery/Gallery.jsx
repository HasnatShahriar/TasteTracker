import { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddClick = () => {
    // Check if user is logged in, if not, redirect to login page
    const isLoggedIn = true; // Replace with your authentication logic
    if (!isLoggedIn) {
      return <Link to="/login" />;
    }
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (feedback and image URL) to the server
    // Close the modal after submission
    setModalOpen(false);
  };

  // Dummy data for gallery images
  const images = [
    {
      url: "https://example.com/image1.jpg",
      alt: "Image 1",
      user: "John Doe",
      feedback: "Great experience!",
    },
    {
      url: "https://example.com/image2.jpg",
      alt: "Image 2",
      user: "Jane Smith",
      feedback: "Awesome food!",
    },
    // Add more images as needed
  ];

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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Experience</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  User's Name
                </label>
                <input
                  type="text"
                  value="John Doe" // User's name (read-only)
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
                  onChange={(e) => setFeedback(e.target.value)}
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Map through images and render each */}
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.url} alt={image.alt} className="w-full h-auto" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">
                <p>{image.user}</p>
                <p>{image.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
