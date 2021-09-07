import React from "react";
import { Link } from "react-router-dom";
import "./productcard.css";


const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <Link to={`/${props.id}`} >
                    <img src={props.img} alt="" />
                </Link>
            </div>
            <div className="product-title">
                <p> {props.title}</p>
            </div>
        </div>
    );
};


export default ProductCard;