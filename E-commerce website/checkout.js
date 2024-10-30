// src/pages/Checkout.js
import React from 'react';
import axios from 'axios';

function Checkout({ cart }) {
  const handleCheckout = async () => {
    const session = await axios.post('http://localhost:5000/api/payment/create-checkout-session', {
      items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
    });
    window.location = session.data.url;
  };

  return (
    <div>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
