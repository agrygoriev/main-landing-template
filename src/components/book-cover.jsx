import React from "react";
import bookCoverImage from "../assets/img/Saving-Money-Book-Cover.png";

const BookCover = () => {
  return (
    <div className="pix-content pix-cover">
      <img
        className="book-cover"
        src={bookCoverImage}
        alt="Saving Money Book Cover"
      />
    </div>
  );
};

export default BookCover;
