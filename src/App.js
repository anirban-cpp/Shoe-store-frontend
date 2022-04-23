import { Route, Routes } from "react-router-dom";
import "./App.css";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import Profile from "./Pages/Profile/Profile";
import Headermedia from "./components/Header/Header-media";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Announcement />
      <Header />
      <Headermedia/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
