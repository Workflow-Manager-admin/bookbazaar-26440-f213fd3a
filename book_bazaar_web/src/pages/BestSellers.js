import React from "react";
import BookGrid from "../components/BookGrid";
import "../App.css";
import { useBooks } from "../context/BookContext";

/**
 * Best Sellers page - shows only books marked as isBestSeller=true.
 */
// PUBLIC_INTERFACE
function BestSellers() {
  // Use the custom hook to get all books from context
  const books = useBooks();
  // Filter books for those marked as best sellers (isBestSeller property)
  const bestSellers = books.filter((book) => book.isBestSeller);

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
        <BookGrid filter={(book) => book.isBestSeller} />
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
