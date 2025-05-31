import React, { createContext, useReducer, useContext } from "react";

/**
 * CartContext provides global state and actions for the shopping cart.
 */
const CartContext = createContext();

/**
 * Reducer to manage cart actions: add, remove, increment, decrement, clear.
 * Each cart item: { book, quantity }
 */
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { book } = action;
      const existing = state.items.find((item) => item.book.id === book.id);
      if (existing) {
        // Increment quantity if already in cart
        return {
          ...state,
          items: state.items.map((item) =>
            item.book.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Add new book
        return {
          ...state,
          items: [...state.items, { book, quantity: 1 }]
        };
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.book.id !== action.bookId)
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.book.id === action.bookId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.book.id === action.bookId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialCartState = {
  items: [] // Array of { book, quantity }
};

/**
 * PUBLIC_INTERFACE
 * CartProvider component wraps the app and provides cart state.
 */
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Helper functions for cart manipulation
  // PUBLIC_INTERFACE
  function addToCart(book) {
    dispatch({ type: "ADD_ITEM", book });
  }
  // PUBLIC_INTERFACE
  function removeFromCart(bookId) {
    dispatch({ type: "REMOVE_ITEM", bookId });
  }
  // PUBLIC_INTERFACE
  function incrementQty(bookId) {
    dispatch({ type: "INCREMENT", bookId });
  }
  // PUBLIC_INTERFACE
  function decrementQty(bookId) {
    dispatch({ type: "DECREMENT", bookId });
  }
  // PUBLIC_INTERFACE
  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  // Compute total price (for Cart display)
  // PUBLIC_INTERFACE
  function getCartTotal() {
    return state.items.reduce(
      (total, item) => total + item.book.price * item.quantity,
      0
    );
  }
  // PUBLIC_INTERFACE
  function getCartCount() {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        clearCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useCart - custom hook to access cart state and actions.
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
