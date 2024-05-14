import { useState } from 'react';
import image from '../assets/newsletter_envlp.jpg';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-green-900 via-green-700 to-black py-12 lg:py-16 mt-16 mb-10 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white bg-opacity-90 rounded-lg shadow-xl p-6 lg:p-8">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3 lg:mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-4">Stay updated with our latest news, offers, and updates by subscribing to our newsletter.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-gray-200 text-gray-800 placeholder-gray-600 border border-gray-300 rounded-lg py-3 px-4 mb-2 sm:mr-2 sm:mb-0 focus:outline-none focus:border-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg sm:w-auto focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <img
              src={image}
              alt="Newsletter"
              className="w-full h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
