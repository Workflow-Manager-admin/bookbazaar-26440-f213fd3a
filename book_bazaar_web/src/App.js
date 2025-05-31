import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Import real pages
import Home from './pages/Home';
import BestSellers from './pages/BestSellers';
import NewArrivals from './pages/NewArrivals';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

// PUBLIC_INTERFACE
function HomePage() {
  // Render actual Home.js page instead of a placeholder
  return <Home />;
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
              <Route path="/" element={<Home />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              {/* If route does not match, also go to actual Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;