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
    isNewArrival: false,
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX324_BO1,204,203,200_.jpg",
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "3",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 28.5,
    image: "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "4",
    title: "Zero to One",
    author: "Peter Thiel",
    price: 15.95,
    image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UY327_FMwebp_QL65_.jpg",
    isBestSeller: true,
    isNewArrival: false,
  },
  // ------ Added new books below ------
  {
    id: "5",
    title: "Educated",
    author: "Tara Westover",
    price: 16.5,
    oldPrice: 22.0,
    image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
    isBestSeller: true,
    isNewArrival: false,
  },
  {
    id: "6",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 13.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/81ww0KE5W-L.jpg",
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "7",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 15.25,
    image: "https://images-na.ssl-images-amazon.com/images/I/71oEq2d+GdL.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "8",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 17.25,
    oldPrice: 20.0,
    image: "https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "9",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 10.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    isBestSeller: true,
    isNewArrival: false,
  },
  {
    id: "10",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.49,
    image: "https://images-na.ssl-images-amazon.com/images/I/81Ox45p3zeL.jpg",
    isBestSeller: true,
    isNewArrival: false,
  },
  {
    id: "11",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 21.49,
    oldPrice: 26.0,
    image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "12",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 12.96,
    image: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "13",
    title: "Becoming",
    author: "Michelle Obama",
    price: 17.95,
    image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
    isBestSeller: true,
    isNewArrival: false,
  },
  {
    id: "14",
    title: "Normal People",
    author: "Sally Rooney",
    price: 13.75,
    image: "https://images-na.ssl-images-amazon.com/images/I/61pR-5hN6BL.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "15",
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 12.5,
    image: "https://images-na.ssl-images-amazon.com/images/I/81F0xbLOIPL.jpg",
    isBestSeller: false,
    isNewArrival: false,
  },
  {
    id: "16",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 18.25,
    oldPrice: 22.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/71j-SbQYKHL.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "17",
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 19.49,
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "18",
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    price: 8.98,
    image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0eSL.jpg",
    isBestSeller: false,
    isNewArrival: false,
  },
  {
    id: "19",
    title: "Dune",
    author: "Frank Herbert",
    price: 22.0,
    oldPrice: 27.0,
    image: "https://covers.openlibrary.org/b/id/9259256-L.jpg", // Placeholder from Open Library if previous was broken
    isBestSeller: false,
    isNewArrival: true,
  },
  {
    id: "20",
    title: "A Promised Land",
    author: "Barack Obama",
    price: 19.99,
    image: "https://covers.openlibrary.org/b/id/10523374-L.jpg", // Placeholder from Open Library if previous was broken
    isBestSeller: true,
    isNewArrival: true,
  },
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
