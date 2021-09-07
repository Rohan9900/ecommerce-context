import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./cartcard.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const Cartcard = (props) => {
  const { product } = props;
  const { increase, decrease, removeProduct } = useCart();

  return (
    <div className="shopping-cart" id="shopping-cart">
      <div className="column-labels">
        <label style={{float:"left",width:"20%"}}>Image</label>
        <label style={{float:"left",width:"20%"}}>Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity" style={{ marginTop: "0px" }}>
          Quantity
        </label>
        <label style={{float:"left",width:"0.5%"}}>Remove</label>
        <label className="product-line-price" style={{ marginTop: "0px" }}>
          Total
        </label>
      </div>
      <div classNameName="product">
        <div className="product-image">
          <img src={product.Image[0]} />
        </div>
        <div className="product-details">
          <div className="product-title">{product.Phone_name}</div>
        </div>
        <div className="product-price">₹ {product.Prices[0]}</div>

        <div className="product-quantity">
          <span
            style={{ marginLeft: "19px" }}
            onClick={() => {
              increase(product);
            }}
          >
            +
          </span>{" "}
          <input
            type="number"
            value={product.quantity}
            min="1"
            style={{ width: "30px" }}
          />
          {product.quantity >= 1 && <span
            onClick={() => {
              decrease(product);
            }}
          >
            -
          </span>}
        </div>
        <div className="product-removal">
          <button
            className="remove-product"
            onClick={() => {
              removeProduct(product);
            }}
          >
            <RiDeleteBin5Line />
          </button>
          <Link to={`${product.id}`}>
            <button className="remove-product">
              <BiEditAlt />
            </button>
          </Link>
        </div>
        <div>₹ {product.Prices[0] * product.quantity}</div>
      </div>
    </div>
  );
};
export default Cartcard;
