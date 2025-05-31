import React from "react";
import { useCart } from "../context/CartContext";

/**
 * Cart page - shows all books in cart with quantity controls and total price.
 */
// PUBLIC_INTERFACE
function Cart() {
  const {
    cartItems,
    incrementQty,
    decrementQty,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
  } = useCart();

  if (!cartItems.length) {
    return (
      <div className="hero">
        <div className="subtitle">Your Cart</div>
        <h1 className="title">Shopping Cart</h1>
        <div className="description" style={{ color: "var(--text-secondary)" }}>
          Your cart is empty. Add books from our catalog!
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="hero" style={{ paddingBottom: "42px" }}>
        <div className="subtitle">Your Cart</div>
        <h1 className="title">Shopping Cart</h1>
        <div className="description">
          Books you&apos;ve added to your cart are listed below.
        </div>
      </section>
      <div
        className="container"
        style={{
          background: "var(--primary-color)",
          borderRadius: "10px",
          padding: "28px 16px 24px 16px",
          marginBottom: "40px",
          maxWidth: "700px",
          boxShadow: "0 8px 32px 0 rgba(44,62,80,0.20)",
        }}
      >
        <table style={{ width: "100%", color: "var(--secondary-color)" }}>
          <thead>
            <tr style={{ color: "var(--accent-color)", fontWeight: 600 }}>
              <th align="left" style={{ padding: "12px 0" }}>Book</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ book, quantity }) => (
              <tr key={book.id}>
                <td style={{ padding: "10px 0", maxWidth: "240px" }}>
                  <span title={book.title}>{book.title}</span>
                  <div style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.93rem"
                  }}>{book.author}</div>
                </td>
                <td style={{ textAlign: "center" }}>
                  ${book.price.toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent:"center" }}>
                    <button
                      onClick={() => decrementQty(book.id)}
                      className="btn"
                      aria-label={`Decrease quantity of ${book.title}`}
                      style={{ minWidth: 30, fontSize: "1.2rem", padding: "4px 8px" }}
                      disabled={quantity <= 1}
                      title="Decrease quantity"
                    >–</button>
                    <span style={{ minWidth: 16, textAlign: "center" }}>{quantity}</span>
                    <button
                      onClick={() => incrementQty(book.id)}
                      className="btn"
                      aria-label={`Increase quantity of ${book.title}`}
                      style={{ minWidth: 30, fontSize: "1.2rem", padding: "4px 8px" }}
                      title="Increase quantity"
                    >+</button>
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>
                  ${(quantity * book.price).toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  <button
                    onClick={() => removeFromCart(book.id)}
                    className="btn"
                    aria-label={`Remove ${book.title} from cart`}
                    style={{
                      background: "#913724",
                      color: "white",
                      padding: "5px 10px",
                      fontSize: "0.95rem",
                    }}
                    title="Remove from cart"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 600,
            fontSize: "1.13rem",
            color: "var(--accent-color)",
          }}
        >
          <div>
            Total ({getCartCount()}{" "}
            {getCartCount() === 1 ? "book" : "books"}):
          </div>
          <div style={{ fontSize: "1.25rem" }}>
            ${getCartTotal().toFixed(2)}
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button
            className="btn"
            onClick={clearCart}
            style={{
              background: "#913724",
              color: "white",
              marginLeft: "8px",
              fontWeight: 590,
            }}
            aria-label="Clear all cart items"
            title="Remove all items from cart"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
