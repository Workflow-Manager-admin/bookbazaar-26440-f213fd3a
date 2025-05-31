import React from "react";
import BookGrid from "../components/BookGrid";
import "../App.css";

/**
 * Best Sellers page - shows only books marked as isBestSeller=true using BookGrid.
 */
// PUBLIC_INTERFACE
function BestSellers() {
  // Reuse BookGrid's filtering prop for isBestSeller
  return (
    <div
      style={{
        background: "var(--canvas-bg)",
        minHeight: "calc(100vh - 60px)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 0 24px",
          background: "transparent"
        }}
      >
        <section className="hero" style={{ paddingBottom: 0 }}>
          <div className="subtitle">Best Sellers</div>
          <h1 className="title">Top Books</h1>
          <div className="description">
            These titles are flying off the shelves! See what's trending now.
          </div>
        </section>
        {/* Show only best sellers with BookGrid, includes Add to Cart */}
        <BookGrid filter={(book) => book.isBestSeller === true} />
      </div>
      <footer
        style={{
          marginTop: "32px",
          color: "var(--muted-text)",
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

export default BestSellers;
