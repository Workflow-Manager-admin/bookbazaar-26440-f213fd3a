import React, { createContext, useContext } from "react";

// PUBLIC_INTERFACE
/**
 * BookContext provides the global book data (static/dummy for now).
 */
const BookContext = createContext();

/**
 * Dummy/static list of books for the app.
 * Update or extend as needed for future requirements.
 */
const DUMMY_BOOKS = [
  {
    id: "1",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    price: 29.99,
    oldPrice: 34.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX324_BO1,204,203,200_.jpg",
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: "3",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 28.50,
    image: "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg",
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: "4",
    title: "Zero to One",
    author: "Peter Thiel",
    price: 15.95,
    image: "https://images-na.ssl-images-amazon.com/images/I/81K6BZSdG0L.jpg",
    isBestSeller: true,
    isNewArrival: false
  }
];

/**
 * PUBLIC_INTERFACE
 * BookProvider component to wrap app and provide book data context.
 */
export function BookProvider({ children }) {
  // For static data, just return directly. API remains extensible.
  return (
    <BookContext.Provider value={{ books: DUMMY_BOOKS }}>
      {children}
    </BookContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useBooks - custom hook to access books array in context.
 */
export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context.books;
}
