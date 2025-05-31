import React from "react";

/**
 * CartItem component displays a single cart item (book) with image, title, author, price, quantity controls, subtotal, and remove option.
 * Designed for BookBazaar dark theme.
 * 
 * Props:
 * - book: { id, title, author, price, image }
 * - quantity: number
 * - incrementQty(bookId): function
 * - decrementQty(bookId): function
 * - removeFromCart(bookId): function
 */
 // PUBLIC_INTERFACE
function CartItem({ book, quantity, incrementQty, decrementQty, removeFromCart }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "var(--primary-color)",
        borderRadius: "8px",
        padding: "13px 8px",
        marginBottom: "14px",
        boxShadow: "0 3px 12px 0 rgba(44,62,80,0.08)",
        border: "1px solid var(--border-color)",
        gap: "16px",
      }}
    >
      <img
        src={book.image}
        alt={book.title}
        style={{
          width: "62px",
          height: "88px",
          objectFit: "cover",
          borderRadius: "6px",
          border: "1px solid var(--border-color)",
          background: "var(--background-light)"
        }}
      />
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <div style={{
          color: "var(--secondary-color)",
          fontWeight: 600,
          fontSize: "1.14rem",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden"
        }} title={book.title}>{book.title}</div>
        <div style={{
          color: "var(--text-secondary)",
          fontSize: "0.98rem",
          marginBottom: "2px"
        }}>{book.author}</div>
        <div style={{
          color: "var(--accent-color)",
          fontWeight: 700,
          fontSize: "1.09rem"
        }}>${book.price.toFixed(2)}</div>
      </div>
      <div style={{
        minWidth: "116px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "5px"
        }}>
          <button
            className="btn"
            style={{
              minWidth: "28px", fontSize: "1.08rem",
              padding: "3px 8px"
            }}
            aria-label={`Decrease quantity of ${book.title}`}
            onClick={() => decrementQty(book.id)}
            disabled={quantity <= 1}
            title="Decrease quantity"
          >–</button>
          <span style={{
            minWidth: "18px",
            textAlign: "center",
            fontWeight: 500
          }}>{quantity}</span>
          <button
            className="btn"
            style={{
              minWidth: "28px", fontSize: "1.08rem",
              padding: "3px 8px"
            }}
            aria-label={`Increase quantity of ${book.title}`}
            onClick={() => incrementQty(book.id)}
            title="Increase quantity"
          >+</button>
        </div>
        <div style={{
          fontSize: "0.95rem",
          color: "var(--text-secondary)"
        }}>
          Subtotal: <span style={{ color: "var(--accent-color)", fontWeight: 600 }}>${(book.price * quantity).toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(book.id)}
        className="btn"
        aria-label={`Remove ${book.title} from cart`}
        style={{
          background: "#913724",
          color: "white",
          padding: "5px 10px",
          fontSize: "0.95rem",
          marginLeft: "10px",
        }}
        title="Remove from cart"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
