import React from "react";
import Link from "gatsby-link";

class Header extends React.Component {
  render() {
    return (
      <nav className="bg-yellow">
        <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
          <Link to="/" className="flex items-center no-underline text-black">
            <span className="font-bold text-xl tracking-tight">
                Weird JS
            </span>
          </Link>

          <button className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            id="nav"
            className="hidden md:flex md:items-center w-full md:w-auto"
          >
            <div className="text-sm">
              <Link
                  to="/"
                  className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"
                >
                    Home
                </Link>

              <Link
                  to="/about"
                  className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
                >
                    About
                </Link>

              <Link
                  to="/contact"
                  className="block md:inline-block mt-4 md:mt-0 no-underline text-black"
                >
                    Contact
                </Link>
            </div>
          </div>
        </div>
      </nav>
    );
    }
};

export default Header;