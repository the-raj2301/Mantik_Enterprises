import React from 'react';
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#121213] text-white font-jost">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          {/* Main Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-8 text-left">
            {/* About Firm */}
            <div>
                <img src='./img/logo-xl.png' className='mb-4 h-14'/>
              <p className="text-gray-400">
              <span className='uppercase'>Mantik Enterprises,</span> excels in premium glass solutions, specializing in V-groove designs and offering top brands like SGG and MG. Our services include CEP, beveling, glass cutting, installation, and custom job work, ensuring exceptional quality for all needs.
              </p>
            </div>
            {/* Useful Links */}
            <div className='md:ml-16 lg:ml-20 py-14 md:py-0'>
                
              <h1 className="text-2xl font-semibold mb-4 tracking-widest">Useful Links</h1>
              <ul className="space-y-2">
                <li><a href="#Carousel" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#About-Us" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#Products" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#Products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#Contact-Us" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            {/* Office Information */}
            <div>
              <h1 className="text-2xl font-semibold mb-4 tracking-widest">Office</h1>
              <ul className="space-y-2 text-gray-400">
                <li>Email: <a href="mailto:the.raj2301@gmail.com" className="hover:text-white">mantikenterprises24@gmail.com</a></li>
                <li>Phone: <a href="tel:+917738339185" className="hover:text-white">+91 98706 15500</a></li>
                <li>
                  Address: 
                  <p className="text-gray-400">
                    Unit NO: 1, Ghaswala Estate, Swami Vivekananda Rd, opp. 24 Karat, Jogeshwari West, Mumbai-400102
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
          {/* Copyright Section */}
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center text-center text-gray-500 tracking-widest space-y-2 lg:space-y-0">
            <div>© 2024 Mantik Enterprises. All rights reserved.</div>
            <div>
                Designed By: <a target='_blank' href="https://www.instagram.com/the.raj2301/" className="transition ease-in-out delay-200 hover:text-orange-500">the.raj2301</a>
            </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
