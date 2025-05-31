import React from "react";
import BookGrid from "../components/BookGrid";
import "../App.css";

/**
 * Home page - visually styled to match the BookBazaar yellow/white theme reference.
 * Features: sticky yellow header (handled by Navbar), large centered section title, responsive 5-column grid, product card with price (including strike-through if discounted), modern card design, and Add to Cart button.
 */
// PUBLIC_INTERFACE
function Home() {
  return (
    <div style={{ background: "#FFF", minHeight: "calc(100vh - 60px)" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 0 24px",
        }}
      >
        <h2
          className="latest-products-heading"
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "1.6em",
            color: "#252525",
            letterSpacing: "0.04em",
            margin: "0 0 24px 0",
            textAlign: "center",
          }}
        >
          Latest Products
        </h2>
        <BookGrid />
      </div>
      <footer
        style={{
          marginTop: "32px",
          color: "#888",
          fontSize: "0.96em",
          textAlign: "right",
          padding: "8px 34px 24px 0",
        }}
      >
        Powered by Joomla!
      </footer>
    </div>
  );
}

export default Home;
