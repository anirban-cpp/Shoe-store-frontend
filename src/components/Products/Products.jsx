import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { getProductListRequest } from "../../Redux/Actions/ProductActions";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(getProductListRequest());
    if (products) {
      setProductList(products.filter((product) => product.id <= 12));
    }
  }, []);

  if (loading) return <Spinner loading={loading} />;

  if (error) return <div>{error}</div>;

  return (
    <div className="products">
      <div className="products-container">
        {productList.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <button className="show-more">Show more</button>
    </div>
  );
};

export default Products;
