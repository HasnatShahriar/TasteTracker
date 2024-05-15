import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import ImageCard from "../../components/ImageCard";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import image from '../../assets/gallery_bg.jpg'
import 'animate.css';
const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [allImages, setAllImages] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/images`)
      setAllImages(data)
    }
    getData()
  }, [])


  const handleAddClick = () => {
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
  
    setModalOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>TasteTracker | Gallery</title>
      </Helmet>
      <section className="relative">
        {/* Banner with background image */}
        <div
          className="bg-cover bg-center h-80 flex items-center justify-center rounded-md"
          style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${image})` }}
        >
          <h1 className="text-green-500 text-2xl font-bold">Gallery</h1>
        </div>
      </section>


      <section>
        <h1 className="animate__animated animate__fadeInLeft text-3xl font-bold text-center mt-16">Do You Want to Share Something ?</h1>
      </section>
      <div className="flex justify-center mt-8">
        {/* Add Button */}
        <button
          onClick={handleAddClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-6"
        >
          Add Image & Feedback
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allImages.map((photo, index) => (
          <ImageCard key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
