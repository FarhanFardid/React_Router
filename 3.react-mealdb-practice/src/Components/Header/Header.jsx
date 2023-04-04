import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-purple-800 bg-gray-500 p-5 w-full text-center">
        
      <Link className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/">Home</Link>
      <Link className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/food">Canadian Food</Link>
      <Link className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/seafood">SeaFood</Link>
      <Link className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/order">Order</Link>
      <Link className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Header;
