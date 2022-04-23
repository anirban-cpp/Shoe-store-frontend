import React, { useRef } from "react";

const Search = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
