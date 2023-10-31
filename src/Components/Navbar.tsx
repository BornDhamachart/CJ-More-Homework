import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <Link to="/" className="flex items-center">
          <img
            src="../../public/cjlogo.jpeg"
            className="h-8 mr-3"
            alt="CJ More Logo"
          />
          <span className="text-center text-2xl font-semibold">CJ More</span>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
