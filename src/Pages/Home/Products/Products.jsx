import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Spinner from "../../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import {
  getProductListRequest,
  getqueriedProductRequest,
} from "../../../Redux/Actions/ProductActions";
import {
  getProductPaginationRequest,
  removePaginationproduct,
} from "../../../Redux/Actions/paginatedProductAction";
import QueryNotFound from "../../NotFound/QueryNotFound";

const Products = ({ keyword }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productList);

  const { paginatedProducts, paginationLoading } = useSelector(
    (state) => state.paginatedproduct
  );

  useEffect(() => {
    if (keyword && keyword.trim().length > 0) {
      dispatch(getqueriedProductRequest(keyword));
    } else {
      dispatch(getProductListRequest());
      dispatch(removePaginationproduct());
    }
  }, [keyword, dispatch]);

  useEffect(() => {
    if (page > 1 && page <= 3) {
      dispatch(getProductPaginationRequest(page));
    } else if (page > 3) {
      setPage(1);
      dispatch(removePaginationproduct());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  if (loading) return <Spinner loading={loading} />;

  return (
    <div className="products">
      <div className="products-container">
        {products?.length > 0 ? (
          products.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <QueryNotFound keyword={keyword} />
        )}
      </div>
      {!keyword && (
        <div className="products-container">
          {paginationLoading ? (
            <Spinner loading={paginationLoading} />
          ) : (
            paginatedProducts?.map((product) => (
              <Product key={product.id} {...product} />
            ))
          )}
        </div>
      )}
      {keyword?.length > 0 || paginationLoading ? (
        <></>
      ) : (
        <button
          className="show-more"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          {page === 3 ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Products;
