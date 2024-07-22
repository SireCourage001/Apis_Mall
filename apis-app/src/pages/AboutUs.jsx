import React from 'react';
import githubLogo from './assets/github.svg';  // Adjust the path based on your project structure
import facebookLogo from './assets/facebook.svg';
import gmailLogo from './assets/gmail.svg';
import whatsappLogo from './assets/whatsapp.svg';

function AboutUs() {
  return (
    <div className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 text-center mb-8">Welcome to Apis Mall</h2>
        
        <section className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Apis_Mall, we're passionate about encouraging apiarists of all strata to produce unadulterated honey and bee products. It is a haven for everything bee related.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Empowering Apiarists:</strong> We aim to offer a wide range of products carefully curated to enhance the efficiency and success of beekeeping operations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Promoting Sustainability:</strong> We are committed to sustainability and environmental stewardship. Our products are selected with a focus on sustainability, ensuring they meet high-quality standards while minimizing environmental impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Educational Resources:</strong> Beyond selling products, we believe in sharing knowledge. Best beekeeping practices is key.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">What Sets Us Apart</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Expertise and Passion:</strong> Founded and run by experienced beekeepers, Apis_Mall understands the needs and challenges of beekeepers firsthand. Our team is dedicated to sharing our passion and knowledge with our customers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Quality Assurance:</strong> We source our products from trusted and certified bee farmers and bee gadget manufacturers known for their commitment to quality and reliability. Every item in our inventory undergoes rigorous testing to ensure it meets our high standards.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Customer-Centric Approach:</strong> We prioritize customer satisfaction above all else. Whether you're a hobbyist or a commercial beekeeper, we strive to provide exceptional service, reliable support, and prompt delivery of your orders.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Product Catalog</h3>
          <ul className="list-disc text-lg text-gray-700 flex flex-col items-center space-y-2">  
            <li><strong>Bee wax</strong></li>
            <li><strong>Honey</strong></li>
            <li><strong>Jelly</strong></li>
            <li><strong>Propolis</strong></li>
            <li><strong>Venom</strong></li>
            <li>Beekeeping Equipment: From hive kits to protective gear, we offer a complete selection of beekeeping equipment designed for durability and ease of use.</li>
            <li>Honey Extraction Tools: Explore our range of extractors, filters, and other tools essential for harvesting and processing honey efficiently.</li>
            <li>Educational Materials: Dive deeper into the world of beekeeping with our selection of books, guides, and educational resources for beekeepers at all skill levels.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Apis_Mall, we believe in the power of community. Whether you're a beginner beekeeper or a seasoned pro, we invite you to join our community of like-minded individuals who share a passion for bees and sustainable agriculture. Connect with us on social media, subscribe to our newsletter, and stay updated on the latest news, tips, and promotions.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a question or need assistance? Our customer service team is here to help. Reach out to us via email, phone, or through our website's live chat feature. We're always happy to assist you in any way we can.
          </p>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/SireCourage001" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="apis_mall@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={gmailLogo} alt="Gmail" className="h-8 w-8" />
            </a>
            <a href="https://wa.me/09037001460" target="_blank" rel="noopener noreferrer">
              <img src={whatsappLogo} alt="WhatsApp" className="h-8 w-8" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
