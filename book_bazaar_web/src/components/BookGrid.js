import React from "react";
import "../App.css";
import { useBooks } from "../context/BookContext";
import { useCart } from "../context/CartContext";

/**
 * BookGrid component renders a grid of BookCards.
 * Uses BookContext for books, CartContext for add-to-cart.
 *
 * Props (optional):
 *   - filter: (book) => boolean   // Function to filter books (e.g., best-sellers, new arrivals)
 */
 // PUBLIC_INTERFACE
function BookGrid({ filter }) {
  const books = useBooks();
  const { addToCart } = useCart();

  // Filter books if a filter function is provided
  const displayBooks = filter ? books.filter(filter) : books;

  if (!displayBooks.length) {
    return (
      <div style={{
        color: "var(--text-secondary)",
        padding: "2rem",
        textAlign: "center"
      }}>
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
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
              background: "var(--background-light)",
              borderBottom: "1px solid var(--border-color)"
            }}
          />
          <div className="book-info">
            <div className="book-title" title={book.title}>{book.title}</div>
            <div className="book-author" title={book.author}>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                {book.author}
              </span>
            </div>
            <div className="book-price">
              <span style={{ color: "var(--accent-color)", fontWeight: 700 }}>${book.price.toFixed(2)}</span>
            </div>
          </div>
          <button
            className="btn btn-large"
            style={{
              width: "100%",
              marginTop: "10px",
              backgroundColor: "var(--accent-color)",
              color: "var(--background-dark)"
            }}
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

/* Inline styles for grid/card; ideally, move to App.css if reused */
const style = document.createElement("style");
style.textContent = `
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 28px;
  margin-top: 16px;
  margin-bottom: 24px;
}
.book-card {
  display: flex;
  flex-direction: column;
  background: var(--primary-color);
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(44,62,80,0.11);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: box-shadow 0.15s, transform 0.15s;
}
.book-card:hover, .book-card:focus-within {
  box-shadow: 0 8px 24px 0 rgba(230,103,34,0.14), 0 1.5px 8px 0 rgba(44,62,80,0.13);
  transform: translateY(-2px) scale(1.01);
}
.book-info {
  padding: 14px 14px 0 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 auto;
}
.book-title {
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.book-author {
  font-size: 0.97rem;
  margin-bottom: 4px;
}
.book-price {
  font-size: 1.09rem;
  font-weight: 600;
  margin-bottom: 2px;
}
@media (max-width: 600px) {
  .book-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .book-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 98vw;
  }
}
`;
document.head.appendChild(style);
