import React, { useEffect, useState } from "react";
import "./productlist.css";
import data from '../../data.json'
import ProductCard from "../../components/productcard/productcard";

const ProductList = (props) => {
  

  return (
  <div className="list-product">
  {data.map((product)=>{
      return(
          <ProductCard title={product.Phone_name} img={product.Image[0]} id={product.id}/>
      )
  })}    
  </div>);
};

export default ProductList;
