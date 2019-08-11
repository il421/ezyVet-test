import React from 'react';
import '../styles/main.css';

import Header from './layouts/Header.js';
import Cart from './cart/Cart.js';
import Products from './products/Products.js';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Products />
        <Cart />
      </main>
    </div>
  );
}

export default App;
