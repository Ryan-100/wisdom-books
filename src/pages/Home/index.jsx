// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favourite.action";
import Hero from "../../components/Hero";
import BookCard from "../../components/BookCard";
import Loader from "../../components/Loader";

const Home = () => {
  const [recentBooks, setRecentBooks] = useState([]);
  const [displayCount, setDisplayCount] = useState(10);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { data, isSearching, notFound } = useSelector((state) => state.search);
  const { favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    setLoading(true);
    const fetchRecentBooks = async () => {
      try {
        const response = await axios.get("https://www.dbooks.org/api/recent");
        setRecentBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recent books:", error);
      }
    };

    fetchRecentBooks();
  }, []);
  const loadMore = () => {
    setDisplayCount(displayCount + 10);
  };

  const favChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  const handleAddToFavorites = (book) => {
    dispatch(addToFavorites(book));
  };

  const handleRemoveFromFavorites = (book) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
    dispatch(removeFromFavorites(updatedFavorites));
  };

  return (
    <>
      <Hero />
      <div className="container flex flex-col min-h-screen py-[1rem] px-[3rem] md:px-[5rem]">
        {isSearching ? (
          <div className="pt-20">
            <Loader />
          </div>
        ) : (
          <>
            {data?.length > 0 && (
              <p className="header">Your Search Result is here.</p>
            )}
            {notFound && <p className="header">Sorry, no result found!</p>}
            <div className="book-shelf mt-[1rem] mb-[4rem]">
              {data &&
                data
                  .slice(0, displayCount)
                  .map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      isFav={favChecker(book.id)}
                      addFn={() => handleAddToFavorites(book)}
                      removeFn={() => handleRemoveFromFavorites(book)}
                    />
                  ))}
            </div>
          </>
        )}
        {displayCount < data?.length && (
          <button className="btn self-center" onClick={loadMore}>
            Load More
          </button>
        )}
        {loading ? (
          <Loader />
        ) : (
          <>
            <p className="header">Recent Books</p>

            <div className="book-shelf mt-[1rem] mb-[4rem]">
              {recentBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  isFav={favChecker(book.id)}
                  addFn={() => handleAddToFavorites(book)}
                  removeFn={() => handleRemoveFromFavorites(book)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
