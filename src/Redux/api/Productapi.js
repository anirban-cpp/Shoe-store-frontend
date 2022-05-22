import { productaxios } from "../../AxiosInstance/axiosinstance";

export const loadProductsApi = async () =>
  await productaxios.get("/paginated?page=1");

export const loadProductApi = async (productId) =>
  productaxios.get(`/${productId}`);

export const loadQueriedProductsApi = async (keyword) =>
  productaxios.get(`/?keyword=${keyword}`);

export const loadPaginatedProductsApi = async (page) =>
  productaxios.get(`/paginated?page=${page}`);

export const addProductReviewApi = async (review) =>
  productaxios.post(`/${review.id.toString()}/review`, {
    name: review.name,
    userId: review.userId,
    rating: review.rating,
    comment: review.comment,
  });
