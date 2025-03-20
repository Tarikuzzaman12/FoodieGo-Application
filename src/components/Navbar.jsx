"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession()

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button (Left) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none transition duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Website Name (Center) */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-yellow-600 transition duration-300"
            >
              FoodDelivery
            </a>
          </div>

          {/* Icons for Mobile (Right) */}
          <div className="flex md:hidden items-center space-x-4">
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

          {/* Desktop Menu (Hidden on Mobile) */}
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

          {/* Search Bar and Icons (Right - Desktop) */}
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

            {/* Signin Button */}
            {status == 'authenticated' ? <>
              <button onClick={() => signOut()} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                Logout
              </button>
            </> : <>
              <Link href="/login">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                  Signin
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                  SignUp
                </button>
              </Link>
            </>}

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border border-amber-200 p-4 rounded-lg">
            <div className="space-y-4">
              <a
                href="/"
                className="block hover:text-yellow-200 transition duration-300"
              >
                Home
              </a>
              <a
                href="/category"
                className="block hover:text-yellow-200 transition duration-300"
              >
                Category
              </a>
              <a
                href="/shop"
                className="block hover:text-yellow-200 transition duration-300"
              >
                Shop
              </a>
              <a
                href="/blog"
                className="block hover:text-yellow-200 transition duration-300"
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
              {/* Signin Button in Mobile Menu */}
              <Link href="/login">
                <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 mt-2">
                  Signin
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;