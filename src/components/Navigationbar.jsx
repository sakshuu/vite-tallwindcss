import React, { useState } from 'react'
import { Be, facebook, linkdin, location, mail, phone } from '../assets/img';

const Navigationbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return <>
  {/* Top Navigation Bar */}
<nav className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">

            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-2 text-gray-200 font-medium hover:text-green-500 transition duration-300">
               
                </a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
              <div className="flex items-center gap-1">
          <img src={phone} alt="Phone" className="w-4 " /> &nbsp;
          <span>+91-811-234-6567</span>
        </div>
              </a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
              <div className="flex items-center gap-1">
          <img src={mail} alt="Email" className="w-4 " /> &nbsp;
          <span>myportfolio@gmail.com</span>
        </div>
              </a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
              <div className="flex items-center gap-1">
          <img src={location} alt="Location" className="w-4 " /> &nbsp;
          <span>Address, Haryana, India</span>
        </div>
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
           <div>
            <img src={Be} alt="be" />
            </div> 
          <div>
            
             <img src={linkdin} alt="li" />
            </div> 
          <div>
            
             <img src={facebook} alt="face" />
            </div> 
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
        </ul>
      </div>
    </nav>

    
   {/* Main Navigation Bar */}
       <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-lg font-semibold">Portfolio</div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-500">About</a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-green-500 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white">Service 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white">Service 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white">Service 3</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-green-500">Projects</a>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">CONTACT ME</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <a href="#" className="block py-2 text-gray-700 hover:text-green-500">Home</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-500">About</a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left py-2 text-gray-700 hover:text-green-500 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-green-500">Service 1</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-green-500">Service 2</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-green-500">Service 3</a>
                </div>
              )}
            </div>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-500">Projects</a>
            <a href="#" className="block py-2 bg-green-500 text-white px-4 rounded hover:bg-green-600">CONTACT ME</a>
          </div>
        )}
      </div>
    </nav>
  </>
}

export default Navigationbar