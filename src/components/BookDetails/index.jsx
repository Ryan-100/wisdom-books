import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favourite.action";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const URL = "https://www.dbooks.org/api/book/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    setLoading(true);
    const fetchRecentBook = async () => {
      try {
        const response = await axios.get(`${URL}${id}`);
        setLoading(false);
        setBook(response.data);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching recent books:", error);
        setError(true);
      }
    };

    fetchRecentBook();
  }, [id]);

  const handleAddToFavorites = (book) => {
    dispatch(addToFavorites(book));
  };

  const handleRemoveFromFavorites = (book) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
    dispatch(removeFromFavorites(updatedFavorites));
  };

  const favChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  if (loading)
    return (
      <div className="absolute top-[50%] left-[40%] md:left-[50%] h-screen">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className=" flex flex-col items-center justify-center h-screen space-y-5">
        <p className="header">Sorry, something went wrong!</p>
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );

  return (
    <div className="flex flex-col  p-[3rem]  md:p-[5rem] h-screen">
      <button
        className="flex items-center justify-center space-x-4 btn-outline"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <p>Go Back</p>
      </button>
      <div className="flex flex-col lg:flex-row lg:justify-between space-y-[3rem] ">
        <img
          src={book?.image}
          alt={book?.title}
          className="max-w-[200px] md:max-w-[400px] h-auto object-cover"
        />
        <div className="flex flex-col space-y-5 lg:ml-[5rem]">
          <div className="header flex justify-between">
            <span className="title underline">{book?.title}</span>
            {favChecker(book?.id) ? (
              <AiFillHeart
                onClick={() => handleRemoveFromFavorites(book)}
                className="self-end cursor-pointer text-red-600 text-[24px]"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => handleAddToFavorites(book)}
                className="self-end cursor-pointer text-[24px]"
              />
            )}
          </div>
          <div className="text-[18px]">
            <span>{book?.description}</span>
          </div>
          <div className="book-details-item">
            <span className="font-bold">Subtitle : </span>
            <span className="italic">{book?.subtitle}</span>
          </div>

          <div className="book-details-item">
            <span className="font-bold">Publisher : </span>
            <span className="italic">{book?.publisher}</span>
          </div>
          <div className="book-details-item">
            <span className="font-bold">Published Year: </span>
            <span className="italic">{book?.year}</span>
          </div>
          <Link
            to={book?.url}
            target="_blank"
            className="btn self-start text-center flex items-center justify-center"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
