import React from 'react';
import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-10">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        {/* Left Side - Logo and Nav */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <img src={footerLogo} alt="Logo" className="mb-4 w-24 mx-auto lg:mx-0" />
          <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <li><a href="#home" className="hover:text-primary transition">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition">Services</a></li>
            <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="mb-4 text-sm sm:text-base">
            Subscribe to our newsletter to receive the latest updates, news, and offers!
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-primary text-white px-6 py-2 mt-2 sm:mt-0 sm:ml-2 rounded-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6 text-center sm:text-left">
        {/* Left Side - Privacy Links */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-0">
          <li><a href="#privacy" className="hover:text-primary transition">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary transition">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;