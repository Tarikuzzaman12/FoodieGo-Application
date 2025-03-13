// "use client";

// import React, { useState } from 'react';
// import { FaHeart, FaShoppingCart, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold text-gray-800 hover:text-yellow-500 transition duration-300">
//               MyWebsite
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-800 hover:text-yellow-500 focus:outline-none transition duration-300"
//             >
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <a href="/" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Home
//             </a>
//             <a href="/category" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Category
//             </a>
//             <a href="/shop" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Shop
//             </a>
//             <a href="/blog" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Blog
//             </a>
//           </div>

//           {/* Search Bar and Icons */}
//           <div className="hidden md:flex items-center space-x-6">
//             {/* Search Bar */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
//               />
//               <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
//             </div>

//             {/* Emergency Number */}
//             <div className="text-gray-800 font-medium hover:text-yellow-500 transition duration-300">
//               Emergency: 123-456-7890
//             </div>

//             {/* Icons */}
//             <div className="flex space-x-4">
//               <a href="/wishlist" className="text-gray-800 hover:text-yellow-500 transition duration-300">
//                 <FaHeart className="h-6 w-6" />
//               </a>
//               <a href="/cart" className="text-gray-800 hover:text-yellow-500 transition duration-300">
//                 <FaShoppingCart className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="px-4 pt-4 pb-6 space-y-4">
//             <a href="/" className="block text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Home
//             </a>
//             <a href="/category" className="block text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Category
//             </a>
//             <a href="/shop" className="block text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Shop
//             </a>
//             <a href="/blog" className="block text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
//               Blog
//             </a>
//             {/* Mobile Search Bar */}
//             <div className="relative mt-4">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
//               />
//               <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
//             </div>
//             {/* Mobile Emergency Number */}
//             <div className="text-gray-800 font-medium hover:text-yellow-500 transition duration-300 mt-4">
//               Emergency: 123-456-7890
//             </div>
//             {/* Mobile Icons */}
//             <div className="flex space-x-4 mt-4">
//               <a href="/wishlist" className="text-gray-800 hover:text-yellow-500 transition duration-300">
//                 <FaHeart className="h-6 w-6" />
//               </a>
//               <a href="/cart" className="text-gray-800 hover:text-yellow-500 transition duration-300">
//                 <FaShoppingCart className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
















"use client";

import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-yellow-600 transition duration-300"
            >
              FoodDelivery
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none transition duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="/"
              className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="/category"
              className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300"
            >
              Category
            </a>
            <a
              href="/shop"
              className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300"
            >
              Shop
            </a>
            <a
              href="/blog"
              className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300"
            >
              Blog
            </a>
          </div>

          {/* Search Bar and Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500 transition duration-300"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>

            {/* Emergency Number */}
            <div className="text-gray-800 font-medium">
              Emergency: 123-456-7890
            </div>

            {/* Icons */}
            <div className="flex space-x-4">
              <a
                href="/wishlist"
                className="text-gray-800 hover:text-red-500 transition duration-300"
                aria-label="Wishlist"
              >
                <FaHeart className="h-6 w-6" />
              </a>
              <a
                href="/cart"
                className="text-gray-800 hover:text-green-500 transition duration-300"
                aria-label="Cart"
              >
                <FaShoppingCart className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-b-lg">
          <div className="space-y-4">
            <a
              href="/"
              className="block text-white hover:text-yellow-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="/category"
              className="block text-white hover:text-yellow-200 transition duration-300"
            >
              Category
            </a>
            <a
              href="/shop"
              className="block text-white hover:text-yellow-200 transition duration-300"
            >
              Shop
            </a>
            <a
              href="/blog"
              className="block text-white hover:text-yellow-200 transition duration-300"
            >
              Blog
            </a>
            {/* Mobile Search Bar */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500 transition duration-300"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
            {/* Mobile Emergency Number */}
            <div className="text-white font-medium mt-2">
              Emergency: 123-456-7890
            </div>
            {/* Mobile Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="/wishlist"
                className="text-white hover:text-red-200 transition duration-300"
                aria-label="Wishlist"
              >
                <FaHeart className="h-6 w-6" />
              </a>
              <a
                href="/cart"
                className="text-white hover:text-green-200 transition duration-300"
                aria-label="Cart"
              >
                <FaShoppingCart className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;