import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'; // Import the necessary icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-4 mt-12">
      <div className="container mx-auto px-20 text-center">
        {/* Logo or Title */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">EventCraft</h2>
          <p className="text-sm pt-3 text-gray-300">
          Uniting hearts and minds through unforgettable events, sparking connections, <br /> and shaping a brighter community.
          </p>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between pb-5">
          {/* Copyright */}
          <div className="mb-6 lg:mb-0">
            <p>&copy; {new Date().getFullYear()} EventCraft. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-600 transition duration-300"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-400 transition duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-gupta-9a002b226/" 
              target="_blank"
              className="text-white hover:text-blue-700 transition duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
