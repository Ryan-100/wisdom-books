import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookCard = ({ book, isFav, addFn, removeFn }) => {
  return (
    <div>
      <div className="book-card">
        {isFav ? (
          <AiFillHeart
            onClick={() => removeFn()}
            className="self-end cursor-pointer text-red-600 text-[22px]"
          />
        ) : (
          <AiOutlineHeart
            onClick={() => addFn()}
            className="self-end cursor-pointer text-[22px]"
          />
        )}
        <Link to={`/book/${book.id}`}>
          <img src={book.image} alt={book.title} className="book-img" />
        </Link>
        <p className="title">{book.title}</p>

        <p className="title">
          Author : <span className="authors">{book.authors}</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
