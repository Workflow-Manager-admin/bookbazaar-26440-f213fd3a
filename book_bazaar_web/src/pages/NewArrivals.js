import React from "react";
import BookGrid from "../components/BookGrid";

/**
 * New Arrivals page - shows books marked as isNewArrival=true.
 */
// PUBLIC_INTERFACE
function NewArrivals() {
  const newArrivalsFilter = (book) => book.isNewArrival;

  return (
    <div>
      <section className="hero">
        <div className="subtitle">New Arrivals</div>
        <h1 className="title">Just Landed</h1>
        <div className="description">
          Check out the latest additions to our collection.
        </div>
      </section>
      <BookGrid filter={newArrivalsFilter} />
    </div>
  );
}

export default NewArrivals;
