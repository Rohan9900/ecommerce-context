import React, { useEffect, useState } from "react";
import "./cart.css";
import { useCart } from "../../hooks/useCart";
import Cartcard from "../../components/cart/cartcard";

const Cart = (props) => {
  const { cartItems } = useCart();
  return (
    <div>
      
      {cartItems.map((product) => (
        <Cartcard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Cart;
