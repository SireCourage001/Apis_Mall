import React, { useState, useEffect } from 'react';
import unsplash from '../utils/unsplash';


const formatPriceInNaira = (price) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};


const initialProducts = [
  { id: 1, name: 'Honey', price: 10000, description: 'Per litre. Unadulterated honey,straight from the hives.', query: 'honey' },
  { id: 2, name: 'Bee pollen', price: 25000, description: 'Rich bee pollen.', query: 'bee pollen' },
  { id: 3, name: 'Bee Venom', price: 122000, description: 'Bee venom for vitality.', query: 'bee honey' },
  { id: 4, name: 'Bee propolis', price: 420000, description: 'Natural elixir of life.', query: 'propolis' },
  { id: 5, name: 'Bee wax', price: 12000, description: 'Pure beeswax for various uses.', query: 'beeswax' },
  { id: 5, name: 'Bee suit', price: 77000, description: 'Unique protective apiary suit.', query: 'bee suit' },
  { id: 6, name: 'Bee suit', price: 17000, description: 'Per litre. The difference is clear with Manuka.', query: 'manuka honey' },
  { id: 7, name: 'Royal Jelly', price: 78000, description: 'Jelly with utmost merrimentt.', query: 'royal jelly' },
  { id: 8, name: 'Beeswax Candles', price: 7000, description: 'Natural and scintilating aroma candle.', query: 'bee candles' },
  { id: 9, name: 'Bee Soap', price: 10000, description: 'Give your skin the natural feel with bee soap.', query: 'bee soap' },
  { id: 10, name: 'Bee Lip Balm', price: 7000, description: 'Natural lip glow and balm.', query: 'bee lip balm' },
  { id: 11, name: 'Bee Bread', price: 5000, description: 'More like bread of life.', query: 'bee bread' },
  { id: 12, name: 'Bee Polish', price: 5000, description: 'Polish that brightens you shoes.', query: 'bee polish' },
  
];
const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [productImages, setProductImages] = useState({});
  const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '');
  const [sortOrder, setSortOrder] = useState('name');
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 6;

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      const images = {};
      for (const product of products) {
        try {
          const result = await unsplash.search.getPhotos({
            query: product.query,
            page: 1,
            perPage: 1,
          });
          if (result.response?.results?.length > 0) {
            images[product.id] = result.response.results[0].urls.small;
          }
        } catch (error) {
          console.error(`Error fetching image for ${product.name}:`, error);
        }
      }
      setProductImages(images);
      setIsLoading(false);
    };
    fetchImages();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredAndSortedProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'price_asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Choice</h1>
      <p className="mb-4">Explore our wide range of bee products.</p>
      
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded"
        />
        <select onChange={handleSort} value={sortOrder} className="p-2 border rounded">
          <option value="name">Sort by Name</option>
          <option value="price_asc">Sort by Price (Low to High)</option>
          <option value="price_desc">Sort by Price (High to Low)</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center">Loading products...</div>
      ) : (
        <>
          {filteredAndSortedProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found matching your search.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProducts.map(product => (
                <div key={product.id} className="border p-4 rounded shadow">
                  <div onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                    {productImages[product.id] && (
                      <img src={productImages[product.id]} alt={product.name} className="w-full h-48 object-cover mb-4" />
                    )}
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="font-bold">{formatPriceInNaira(product.price)}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-l"
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100">{currentPage}</span>
            <button 
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={indexOfLastProduct >= filteredAndSortedProducts.length}
              className="px-4 py-2 bg-gray-200 rounded-r"
            >
              Next
            </button>
          </div>
        </>
      )}

      <div className="mt-4">
        <h2 className="text-2xl font-bold">Cart ({cart.length} items)</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {formatPriceInNaira(item.price)}</li>
          ))}
        </ul>
        <p className="font-bold">Total: {formatPriceInNaira(cart.reduce((sum, item) => sum + item.price, 0))}</p>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded max-w-lg">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <img src={productImages[selectedProduct.id]} alt={selectedProduct.name} className="w-full h-64 object-cover my-4" />
            <p>{selectedProduct.description}</p>
            <p className="font-bold mt-2">{formatPriceInNaira(selectedProduct.price)}</p>
            <button 
              onClick={() => setSelectedProduct(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;