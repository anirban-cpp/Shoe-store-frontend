import axios from "axios";

export const loadProductsApi = async () =>
  await axios.get("http://localhost:1000/api/products/paginated?page=1");

export const loadProductApi = async (productId) =>
  axios.get(`http://localhost:1000/api/products/${productId}`);

export const loadQueriedProductsApi = async (keyword) =>
  axios.get(`http://localhost:1000/api/products/?keyword=${keyword}`);

export const loadPaginatedProductsApi = async (page) =>
  axios.get(`http://localhost:1000/api/products/paginated?page=${page}`);

export const addProductReviewApi = async (review) =>
  axios.post(
    `http://localhost:1000/api/products/${review.id.toString()}/review`,
    {
      name: review.name,
      userId: review.userId,
      rating: review.rating,
      comment: review.comment,
    }
  );
