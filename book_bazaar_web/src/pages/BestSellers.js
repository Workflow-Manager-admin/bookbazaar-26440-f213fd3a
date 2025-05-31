import React from "react";
import BookGrid from "../components/BookGrid";

/**
 * Best Sellers page - shows books marked as isBestSeller=true.
 */
// PUBLIC_INTERFACE
function BestSellers() {
  // Only show books with isBestSeller flag
  const bestSellerFilter = (book) => book.isBestSeller;

  return (
    <div>
      <section className="hero">
        <div className="subtitle">Best Sellers</div>
        <h1 className="title">Top Books</h1>
        <div className="description">
          These titles are flying off the shelves! See what&apos;s trending now.
        </div>
      </section>
      <BookGrid filter={bestSellerFilter} />
    </div>
  );
}

export default BestSellers;
