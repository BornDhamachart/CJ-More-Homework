import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="../../public/cjlogo.jpeg"
            className="h-8 mr-3"
            alt="CJ More Logo"
          />
          <span className="text-center text-2xl font-semibold">CJ More</span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
