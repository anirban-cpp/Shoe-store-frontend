import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";

const Home = () => {
  window.scroll(0, 0);
  const { keyword } = useParams();
  return (
    <>
      <Products keyword={keyword}/>
      <Banner />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
