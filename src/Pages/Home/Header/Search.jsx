import React, { useState } from "react";
import { MdClear, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../../utils/useWindowSize";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const size = useWindowSize();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query.trim()}`);
    } else {
      navigate("/");
    }
    setQuery("");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="input-container">
        {size.width > 426 && <MdSearch size={24} />}
        <input
          value={query}
          type="text"
          placeholder="Enter brand name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {size.width > 426 && query.length > 0 && (
          <MdClear size={16} onClick={() => setQuery("")} />
        )}
        {size.width <= 426 &&
          (query.length > 0 ? (
            <MdClear size={16} onClick={() => setQuery("")} />
          ) : (
            <MdSearch size={28} onClick={handleSubmit} />
          ))}
      </div>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
