import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <div className="py-12 bg-black text-white mt-16 mb-10 rounded-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-green-500 mb-6">TasteTracker</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right" className="bg-green-600 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Our Cuisine</h3>
            <p>At TasteTracker, we're passionate about crafting exquisite dishes inspired by flavors from around the world. Each ingredient is carefully selected to ensure a harmonious blend of taste and freshness.</p>
          </div>
          <div data-aos="fade-left" className="bg-green-600 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p>We're committed to providing our guests with an exceptional dining experience characterized by top-notch service, delectable cuisine, and a welcoming atmosphere. Your satisfaction is our priority.</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 data-aos="fade-up" className="text-xl font-semibold mb-4">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-aos="fade-right" className="bg-green-600 rounded-lg shadow-md p-6">
              <p><strong>John Doe - Head Chef</strong></p>
              <p>With years of culinary expertise, Chef John brings creativity and passion to every dish, ensuring a delightful dining experience for our guests.</p>
            </div>
            <div data-aos="fade-up" className="bg-green-600 rounded-lg shadow-md p-6">
              <p><strong>Emily Smith - Restaurant Manager</strong></p>
              <p>Emily's leadership and attention to detail ensure smooth operations and exceptional service, making every visit to TasteTracker a pleasure.</p>
            </div>
            <div data-aos="fade-left" className="bg-green-600 rounded-lg shadow-md p-6">
              <p><strong>Michael Johnson - Head Bartender</strong></p>
              <p>Michael crafts delicious cocktails with precision and flair, elevating your dining experience with every sip.</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 data-aos="fade-up" className="text-xl font-semibold mb-4">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="fade-right" className="bg-green-600 rounded-lg shadow-md p-6">
              <p>"TasteTracker exceeded all our expectations. The food was phenomenal, and the service was impeccable. We'll definitely be back!"</p>
              <p className="font-semibold">- Sarah and Mark, Happy Diners</p>
            </div>
            <div data-aos="fade-left" className="bg-green-600 rounded-lg shadow-md p-6">
              <p>"We had a fantastic evening at TasteTracker. The atmosphere was cozy, the food was divine, and the staff was attentive. Highly recommend!"</p>
              <p className="font-semibold">- David, Satisfied Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
