import React from "react";
import { products } from "../../Data";
import Product from "../Product/Product";

// import CircularProgress from '@mui/material/CircularProgress';

import "./Products.css";

const Products = () => {
  // const [loading, setLoading] = useState(true);

  // if (loading) {
  //   return (
  //     <div className="products">
  //       <CircularProgress color="success" />
  //     </div>
  //   );
  // }

  return (
    <div className="products">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <button className="show-more">Show more</button>
    </div>
  );
};

export default Products;
