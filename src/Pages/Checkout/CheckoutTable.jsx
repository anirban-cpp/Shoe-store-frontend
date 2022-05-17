import React from "react";
import { useSelector } from "react-redux";

const CheckoutTable = () => {
  const { total } = useSelector((state) => state.cart);

  const shippingPrice = total > 1000 ? 0 : 100;
  const taxPrice = (0.15 * total).toFixed(2);

  return (
    <table>
      <tbody>
        <tr>
          <td className="table-key">Products</td>
          <td className="table-value">₹ {Number(total).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="table-key">Shipping</td>
          <td className="table-value">₹ {Number(shippingPrice).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="table-key">Tax</td>
          <td className="table-value">₹ {taxPrice}</td>
        </tr>
        <tr>
          <td className="table-key">Total</td>
          <td className="table-value">
            ₹{" "}
            {(Number(total) + Number(shippingPrice) + Number(taxPrice)).toFixed(
              2
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CheckoutTable;
