// src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {filteredProducts.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
