import React from "react";
import { useParams } from "react-router-dom";

import Products from "./Products/Products";

const Home = ({children}) => {
  window.scroll(0, 0);
  const { keyword } = useParams();
  return (
    <>
      <Products keyword={keyword} />
      {children[0]}
      {children[1]}
      {children[2]}
    </>
  );
};

export default Home;
