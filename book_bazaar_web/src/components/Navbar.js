import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";

// PUBLIC_INTERFACE
/**
 * Navbar component for main navigation.
 * Displays links for Home, Best Sellers, New Arrivals, Contact Info, and Cart icon.
 */
function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div className="logo" tabIndex={0}>
            <span className="logo-symbol" aria-label="BookBazaar Star" title="BookBazaar Logo">
              *
            </span>{" "}
            BookBazaar
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-large" : "btn"} end>
              Home
            </NavLink>
            <NavLink to="/best-sellers" className={({ isActive }) => isActive ? "btn btn-large" : "btn"}>
              Best Sellers
            </NavLink>
            <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? "btn btn-large" : "btn"}>
              New Arrivals
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "btn btn-large" : "btn"}>
              Contact Info
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => isActive ? "btn btn-large" : "btn"}
              style={{ marginLeft: "8px" }}
              aria-label="Cart"
              title="View Cart"
            >
              🛒 Cart{cartCount > 0 ? ` (${cartCount})` : ""}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
