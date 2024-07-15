import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import unsplash from '../utils/unsplash';

const products = [
  { name: 'Honey', query: 'honey jar', description: 'Pure, natural honey. The nectar of life' },
  { name: 'Bee pollen', query: 'bee pollen', description: 'Nutrient-rich bee pollen' },
  { name: 'Bee venom', query: 'bee venom', description: 'Therapeutic bee venom' },
  { name: 'Bee propolis', query: 'propolis', description: 'Immune-boosting propolis' },
  { name: 'Bee wax', query: 'bees wax', description: 'Natural bee wax' },
];

const Home = () => {
  const [productImages, setProductImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const images = {};
      for (const product of products) {
        try {
          const result = await unsplash.search.getPhotos({
            query: product.query,
            page: 1,
            perPage: 1,
          });
          if (result.response?.results?.length > 0) {
            images[product.name] = result.response.results[0].urls.small;
          }
        } catch (error) {
          console.error(`Error fetching image for ${product.name}:`, error);
        }
      }
      setProductImages(images);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      navigate('/products', { state: { searchTerm: term } });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to Apis_Mall!</h1>
      <p className="text-center mb-4">Explore varieties of bee products:</p>
      <input 
        type="search" 
        placeholder="Search products..." 
        className="border p-2 w-full rounded mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              {productImages[product.name] ? (
                <img src={productImages[product.name]} alt={product.name} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <p>Image not available</p>
                </div>
              )}
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/products" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        View All Products
      </Link>
    </div>
  );
};

export default Home;