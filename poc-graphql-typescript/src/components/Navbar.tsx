import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between p-3 md:p-8 bg-gray-800">
      <Link to="/" className="text-white text-sm md:text-base">
        Home
      </Link>

      <div className="flex items-center space-x-2 md:space-x-8">
        <Link to="/nextLaunch" className="text-white text-sm md:text-base">
          Next Launch
        </Link>
        <Link to="/pastLaunch" className="text-white text-sm md:text-base">
          Past Launch
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
