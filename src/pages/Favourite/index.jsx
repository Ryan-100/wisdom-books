import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favourite.action";
import BookCard from "../../components/BookCard";

const Favourite = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favorites);

  const favChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };
  const handleAddToFavorites = (book) => {
    dispatch(addToFavorites(book));
  };
  const handleRemoveFromFavorites = (book) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
    console.log(updatedFavorites, "updatedFavs");
    dispatch(removeFromFavorites(updatedFavorites));
  };

  return (
    <div className="p-[3rem] md:p-[5rem] h-[calc(100vh-10rem)]">
      {favorites.length > 0 ? (
        <p className="header">Your Favourite Books</p>
      ) : (
        <p className="header">No Favourite Books Yet.</p>
      )}
      <div className="book-shelf">
        {favorites.length > 0 &&
          favorites.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFav={favChecker(book.id)}
              addFn={() => handleAddToFavorites(book)}
              removeFn={() => handleRemoveFromFavorites(book)}
            />
          ))}
      </div>
    </div>
  );
};

export default Favourite;
