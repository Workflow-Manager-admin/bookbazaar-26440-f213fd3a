import React from "react";
import "../App.css";
import { useBooks } from "../context/BookContext";
import { useCart } from "../context/CartContext";

/**
 * BookGrid component renders a grid of BookCards.
 * Enhanced for yellow/white theme: supports oldPrice strikethrough, modern card style.
 *
 * Props (optional):
 *   - filter: (book) => boolean   // Function to filter books (e.g., best-sellers, new arrivals)
 */
// PUBLIC_INTERFACE
function BookGrid({ filter }) {
  const books = useBooks();
  const { addToCart } = useCart();

  // Home product card: price and (if present) previous/oldPrice
  const displayBooks = filter ? books.filter(filter) : books;

  if (!displayBooks.length) {
    return (
      <div
        style={{
          color: "#bbb",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        No books found.
      </div>
    );
  }

  return (
    <div className="book-grid">
      {displayBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <img
            className="book-image"
            src={book.image}
            alt={book.title}
            loading="lazy"
            draggable={false}
          />
          <div className="book-info">
            <div className="book-title" title={book.title}>{book.title}</div>
            <div className="book-author" title={book.author}>{book.author}</div>
            <div className="book-price">
              {"oldPrice" in book && book.oldPrice > book.price ? (
                <>
                  <span className="book-current-price">
                    ${book.price.toFixed(2)}
                  </span>
                  <span className="book-old-price">
                    ${book.oldPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="book-current-price">
                  ${book.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <button
            className="btn btn-large"
            type="button"
            onClick={() => addToCart(book)}
            aria-label={`Add "${book.title}" to cart`}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookGrid;
