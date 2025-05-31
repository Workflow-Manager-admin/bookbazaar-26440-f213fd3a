import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

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
        {cartItems.map(({ book, quantity }) => (
          <CartItem
            key={book.id}
            book={book}
            quantity={quantity}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
            removeFromCart={removeFromCart}
          />
        ))}
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 600,
            fontSize: "1.13rem",
            color: "var(--accent-color)",
            borderTop: "1px solid var(--border-color)",
            paddingTop: "10px"
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
