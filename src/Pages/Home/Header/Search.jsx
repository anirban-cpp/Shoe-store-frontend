import React, { useState } from "react";
import { MdClear, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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
        <MdSearch size={24} />
        <input
          value={query}
          type="text"
          placeholder="Enter brand name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && <MdClear size={16} onClick={() => setQuery("")} />}
      </div>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
