import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, clearCart, removeFromCart } from "../../Redux/Actions/CartActions";
import CartItemMedia from "./CartItemMedia";

export const Button = ({ props }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(
      addToCart({
        ...props,
        quantity: 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      removeFromCart({
        ...props,
      })
    );
  };

  return (
    <div className="quantity-btn">
      <div className="quantity-btn-inc" onClick={handleDecrement}>
        <p>-</p>
      </div>
      <p className="quantity-btn-value">{props.quantity}</p>
      <div className="quantity-btn-dec" onClick={handleIncrement}>
        <p>+</p>
      </div>
    </div>
  );
};

const CartItem = ({ props }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-items-row-1">
      <div className="close-btn" onClick={() => {
          dispatch(clearCart(props.id))
          toast.success("Item removed from cart");
        }}>
        <AiFillCloseCircle
          size={24}
          fill="red"
          color="white"
          fontWeight="bold"
        />
      </div>
      <CartItemMedia props={props}/>
      <div className="cart-item-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="cart-item-name">
        <p className="cart-item-brand">{props.brand}</p>
        <p className="cart-item-title">{props.title.length > 40 ? props.title.substring(0,40)+"..." : props.title}</p>
      </div>
      <div className="cart-item-quantity-btn">
        <p>Quantity</p>
        <div>
          <Button props={props} />
        </div>
      </div>
      <div className="sub-total">
        <p>Subtotal</p>
        <p>₹ {Number(props.price) * Number(props.quantity)}</p>
      </div>
    </div>
  );
};

export default CartItem;
