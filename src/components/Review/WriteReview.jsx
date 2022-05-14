import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addProductreviewRequest,
  getProductRequest,
} from "../../Redux/Actions/ProductActions";

import "./WriteReview.css";

const modifyRating = (rating) => {
  if (rating.length > 0 && !isNaN(rating.trim().substring(0, 1)))
    return rating.trim().substring(0, 1);
};

const WriteReview = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  const [rating, setRating] = useState("");
  const [review, setreview] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingValue = modifyRating(rating);
    if (ratingValue) {
      dispatch(
        addProductreviewRequest({
          name: user.name,
          userId: user._id,
          rating: parseInt(rating, 10),
          comment: review,
          id: id,
        })
      );
      setRating("");
      setreview("");
    } else {
      toast.error("Please provide a rating in order to submit a review");
    }
  };

  return (
    <form>
      <div className="write-review">
        <div className="give-rating">
          <p>
            <strong>Rating</strong>
          </p>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required={true}
          >
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
          <textarea
            value={review}
            onChange={(e) => setreview(e.target.value)}
          />
        </div>
        <div className="add-review-btn">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default WriteReview;
