import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDebouncedTerm, setSearchTerm } from "../page/searchSlice";

export default function SearchBar({ placeholder }) {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setDebouncedTerm(searchTerm));
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, dispatch]);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClear = () => {
    dispatch(setSearchTerm(""));
  };

  return (
    <div className="relative w-full max-w-lg ml-5 ">
      <input
        type="text"
        className={`w-full py-1.5 px-4 bg-white text-gray-900 rounded-full shadow-md border 
                    focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all`}
        placeholder={`${placeholder}`}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute top-5 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      )}
    </div>
  );
}
