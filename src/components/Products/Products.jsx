import React, { useEffect } from "react";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import {
  getProductListRequest,
  getqueriedProductRequest,
} from "../../Redux/Actions/ProductActions";

const Products = ({ keyword }) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    if (keyword && keyword.trim().length > 0) {
      dispatch(getqueriedProductRequest(keyword));
    } else {
      dispatch(getProductListRequest());
    }
  }, [keyword, dispatch]);

  if (loading) return <Spinner loading={loading} />;

  return (
    <div className="products">
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <button className="show-more">Show more</button>
    </div>
  );
};

export default Products;
