import React, { useState } from "react";

import "./WriteReview.css";

const WriteReview = ({ user }) => {
  // console.log(user);

  const [rating, setRating] = useState();
  const [review, setreview] = useState("");
  // const date = new Date() 
  // console.log(date.getDate() + "-" + (date.getMonth() + 1) + "-" +date.getFullYear());

  return (
    <form>
      <div className="write-review">
        <div className="give-rating">
          <p>
            <strong>Rating</strong>
          </p>
          <select value={rating} onChange={e => setRating(e.target.value)}>
            <option>Select...</option>
            <option>1 - Poor</option>
            <option>2 - Fair</option>
            <option>3 - Average</option>
            <option>4 - Good</option>
            <option>5 - Excellent</option>
          </select>
        </div>
        <div className="give-comment">
          <p>
            <strong>Comment</strong>
          </p>
          <textarea value={review} onChange={e => setreview(e.target.value)}/>
        </div>
        <div className="add-review-btn">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default WriteReview;
