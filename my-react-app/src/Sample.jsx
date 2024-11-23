import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4 px-6 fixed top-0 w-full z-10 border-b border-gray-700">
        <ul className="flex justify-evenly text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 px-6">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Explore our range of products and learn more about what makes us special.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
