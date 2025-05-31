import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Placeholder page components for each main route

// PUBLIC_INTERFACE
function HomePage() {
  return (
    <div className="hero">
      <div className="subtitle">Welcome to BookBazaar</div>
      <h1 className="title">Home</h1>
      <div className="description">Discover your next favorite book!</div>
    </div>
  );
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
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> BookBazaar
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <NavLink to="/" className={({isActive}) => isActive ? "btn btn-large" : "btn"} end>Home</NavLink>
                <NavLink to="/best-sellers" className={({isActive}) => isActive ? "btn btn-large" : "btn"}>Best Sellers</NavLink>
                <NavLink to="/new-arrivals" className={({isActive}) => isActive ? "btn btn-large" : "btn"}>New Arrivals</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "btn btn-large" : "btn"}>Contact Info</NavLink>
                <NavLink
                  to="/cart"
                  className={({isActive}) =>
                    isActive
                      ? "btn btn-large"
                      : "btn"
                  }
                  style={{ marginLeft: "8px" }}
                >
                  🛒 Cart
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="container" style={{ paddingTop: "120px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/best-sellers" element={<BestSellersPage />} />
              <Route path="/new-arrivals" element={<NewArrivalsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;