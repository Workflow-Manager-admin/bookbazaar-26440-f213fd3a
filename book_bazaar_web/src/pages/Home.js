import React from "react";
import BookGrid from "../components/BookGrid";

/**
 * Home page - features a full grid of all books.
 * Uses BookGrid and BookBazaar theme.
 */
// PUBLIC_INTERFACE
function Home() {
  return (
    <div>
      <section className="hero">
        <div className="subtitle">Welcome to BookBazaar</div>
        <h1 className="title">Discover Your Next Favorite Book</h1>
        <div className="description">
          Browse our best sellers and hot new releases. Add books to your cart and enjoy reading!
        </div>
      </section>
      <BookGrid />
    </div>
  );
}

export default Home;
