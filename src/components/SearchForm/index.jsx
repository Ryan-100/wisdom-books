// Search.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setIsSearching,
  setNotFound,
  setSearchData,
} from "../../redux/actions/search.action";
import useDebounce from "../../hooks/useDebounce";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebounce(query, 1000);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(setIsSearching(true));
    dispatch(setNotFound(false));

    try {
      const response = await axios.get(
        `https://www.dbooks.org/api/search/${debouncedSearch}`
      );
      if (response.data.books) {
        dispatch(setSearchData(response.data.books));
        dispatch(setIsSearching(false));
      } else if (response.data.status === "not found") {
        dispatch(setNotFound(true));
        dispatch(setIsSearching(false));
        dispatch(setSearchData([]));
      } else {
        dispatch(setSearchData([]));
        dispatch(setIsSearching(false));
      }
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  useEffect(() => {
    if (debouncedSearch) {
      handleSearch();
    } else {
      dispatch(setSearchData([]));
    }
  }, [debouncedSearch]); // for search input change but made it debouncing to fetch data after user stop typing

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books"
        className="w-full min-w-[360px] md:min-w-[560px] py-4 px-6 rounded-full outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
