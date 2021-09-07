import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./detail.css";
import data from "../../data.json";
import namedColors from "color-name-list";
import { useCart } from "../../hooks/useCart";

const Detail = (props) => {
  const { id } = useParams();
  const [color, setcolor] = useState(0);
  const [size, setsize] = useState("64");
  const filterarr = data.filter((item) => item.id == id);
  const [val, setval] = useState("1");
  const [disable, setdisable] = useState(false);
  const [height, setheight] = useState(48);

  const onChangeValue = (e) => {
    if (e.target.value == "") {
      setdisable(false);
    } else {
      setdisable(true);
    }
    setsize(e.target.value);
  };
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const onChangeValue2 = (e) => {
    setval(e.target.value);
  };

  return (
    <>
      {filterarr.map((product) => {
        return (
          <div className="detail-container">
            <div className="detail-image">
              <img src={product.Image[color]} alt="" />
            </div>
            <div className="details">
              <div className="detail-name">
                <h1>{product.Phone_name}</h1>
              </div>

              <div className="detail-color">
                <p>Colors:</p>
                {product.Colour.map((color, index) => {
                  let someNamedColor = namedColors.find(
                    (colors) => colors.name === color
                  );

                  return (
                    <div
                      className="color"
                      onClick={() => {
                        setcolor(index);
                      }}
                      style={{
                        backgroundColor:
                          someNamedColor.hex == "#ffffff"
                            ? "wheat"
                            : someNamedColor.hex,
                      }}
                    ></div>
                  );
                })}
              </div>
              <div className="detail-align">
                <div>
                  <div className="detail-capacity">
                    <p>Size:</p>
                    <div>
                      <select onChange={onChangeValue}>
                        <option value="">Select Value</option>
                        <option value="256GB">256GB</option>
                        <option value="64GB">64GB</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="detail-price-option">
                    <p>Pay Method:</p>
                    <div onChange={onChangeValue2}>
                      <input type="radio" name="price" id="total" value="1" />{" "}
                      <label for="total">Total</label>{" "}
                      <input
                        type="radio"
                        name="price"
                        id="EMI"
                        defaultChecked="true"
                        value="2"
                      />{" "}
                      <label for="EMI">EMI</label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="detail-totalprice">
                  <div>
                    <h3>
                      Total Price: ₹{" "}
                      {val == "1"
                        ? size == "256"
                          ? product.Prices[1]
                          : product.Prices[0]
                        : size == "256"
                        ? product.Prices[1] / 10
                        : product.Prices[0] / 10}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="detail-des">
                <p
                  style={{
                    height: height + "px",
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  {product.Details}
                </p>
                <span
                  style={{
                    color: "blue",
                    display: height == 48 ? "inline" : "none",
                  }}
                  onClick={() => {
                    setheight(200);
                  }}
                >
                  Show more...
                </span>
              </div>

              <div>
                <div>
                  <div className="detail-continue">
                    <div>
                      {isInCart(product) && (
                        <Link to="/cart">
                          <button
                            disabled={disable == true ? false : true}
                            onClick={() => increase(product)}
                            className="btn btn-outline-primary btn-sm"
                          >
                            Add more
                          </button>
                        </Link>
                      )}

                      {!isInCart(product) && (
                        <Link to="/cart">
                          <button
                            disabled={disable == true ? false : true}
                            onClick={() => addProduct(product)}
                            className="btn btn-primary btn-sm"
                          >
                            Add to cart
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Detail;
