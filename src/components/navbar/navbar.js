import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
    </div>
  );
};
export default Navbar;