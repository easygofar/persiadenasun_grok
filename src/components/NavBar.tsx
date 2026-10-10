"use client";

import { useState } from "react";

type DropdownKey = "products" | "news";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<DropdownKey, boolean>
  >({
    products: false,
    news: false,
  });

  const toggleDropdown = (key: DropdownKey) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <nav className="bg-white shadow-md" dir="rtl">
        <div className="w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-blue-600">MySite</div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center space-x-6">
              <div className="relative group">
                <button className="py-2 text-gray-700 hover:text-blue-600">
                  Products
                </button>
                <div className="absolute border-[1px] border-gray-300 hidden group-hover:block bg-white shadow-lg rounded top-10 w-40 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 3
                  </a>
                </div>
              </div>

              <div className="relative group">
                <button className="py-2 text-gray-700 hover:text-blue-600">
                  News
                </button>
                <div className="absolute border-[1px] border-gray-300 hidden group-hover:block bg-white shadow-lg rounded top-10 w-40 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Latest News
                  </a>
                </div>
              </div>

              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white">
            <div>
              <button
                onClick={() => toggleDropdown("products")}
                className="w-full text-left text-gray-700 hover:text-blue-600"
              >
                Products
              </button>
              {mobileDropdowns.products && (
                <div className="ml-4 mt-1 space-y-1">
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-500"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-500"
                  >
                    Product 2
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-500"
                  >
                    Product 3
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("news")}
                className="w-full text-left text-gray-700 hover:text-blue-600"
              >
                News
              </button>
              {mobileDropdowns.news && (
                <div className="ml-4 mt-1 space-y-1">
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-500"
                  >
                    Latest News
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              About
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
