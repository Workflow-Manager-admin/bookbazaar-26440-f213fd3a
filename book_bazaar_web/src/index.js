import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BookProvider } from './context/BookContext';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BookProvider>
  </React.StrictMode>
);
