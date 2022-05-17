import { Route, Routes } from "react-router-dom";
import "./App.css";
import Announcement from "./Pages/Home/Announcement/Announcement";
import Header from "./Pages/Home/Header/Header";
import Headermedia from "./Pages/Home/Header/Header-media";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Profile/Profile";
import NotFound from "./Pages/NotFound/NotFound";

import Banner from "./Pages/Home/Banner/Banner";
import Contact from "./Pages/Home/Contact/Contact";
import Footer from "./Pages/Home/Footer/Footer";
import Shipping from "./Pages/Shipping/Shipping";
import Checkout from "./Pages/Checkout/Checkout";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="light" />
      <Announcement />
      <Header />
      <Headermedia />
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Banner />
              <Contact />
              <Footer />
            </Home>
          }
        />
        <Route
          path="/search/:keyword"
          element={
            <Home>
              <Banner />
              <Contact />
              <Footer />
            </Home>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path=":id/orders" element={<Orders />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
