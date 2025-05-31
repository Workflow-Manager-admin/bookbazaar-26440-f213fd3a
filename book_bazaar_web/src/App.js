import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Placeholder page components for each main route

import Home from './pages/Home';

// PUBLIC_INTERFACE
function HomePage() {
  // Render actual Home.js page instead of a placeholder
  return <Home />;
}

// PUBLIC_INTERFACE
function BestSellersPage() {
  return (
    <div className="hero">
      <div className="subtitle">Best Sellers</div>
      <h1 className="title">Top Books</h1>
      <div className="description">These titles are flying off the shelves!</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function NewArrivalsPage() {
  return (
    <div className="hero">
      <div className="subtitle">New Arrivals</div>
      <h1 className="title">Just Landed</h1>
      <div className="description">Fresh picks for avid readers.</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function ContactPage() {
  return (
    <div className="hero">
      <div className="subtitle">Contact Info</div>
      <h1 className="title">Get in Touch</h1>
      <div className="description">
        Email us at <a href="mailto:support@bookbazaar.com" style={{ color: "var(--accent-color)" }}>support@bookbazaar.com</a>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function CartPage() {
  return (
    <div className="hero">
      <div className="subtitle">Your Cart</div>
      <h1 className="title">Shopping Cart</h1>
      <div className="description">Add books to your cart and purchase them here!</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <div className="container" style={{ paddingTop: "120px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/best-sellers" element={<BestSellersPage />} />
              <Route path="/new-arrivals" element={<NewArrivalsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              {/* If route does not match, also go to actual Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;