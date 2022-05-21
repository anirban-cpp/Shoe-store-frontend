import React from "react";

import notfound from "../../assets/Search_not_found.webp";

import "./QueryNotFound.css";

const QueryNotFound = ({ keyword }) => {
  return (
    <div className="querynotfound">
      <p className="not-found-search">
        You searched for <span style={{ color: 'blue' }}>{keyword}</span>
      </p>
      <img src={notfound} alt="not found" />
      <p className="not-found-heading">We couldn't find any matches!</p>
      <p className="alt_text">
        Please check the spelling or try searching something else
      </p>
    </div>
  );
};

export default QueryNotFound;
