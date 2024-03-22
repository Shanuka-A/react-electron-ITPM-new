import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-black-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-black-600 sm:!mb-0 md:text-base dark:text-white">
          ©{1900 + new Date().getYear()} ITPM Project. All Rights Reserved.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              
              href="/about"
              className="text-base font-medium text-black-600 hover:text-red-600 dark:text-white"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              
              href="/contact"
              className="text-base font-medium text-black-600 hover:text-red-600 dark:text-white"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              
              href="/"
              className="text-base font-medium text-black-600 hover:text-red-600 dark:text-white"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              
              href="/"
              className="text-base font-medium text-black-600 hover:text-red-600 dark:text-white"
            >
              Address
            </a>
          </li>
          <li className="flex flex-col items-center"> {/* Changed to a flex column to align items vertically */}
            <a
              
              href="/"
              className="text-base font-medium text-black-600 hover:text-red-600 mb-2 dark:text-white" // Added margin bottom to create space between link and icon
            >
              Stay On Touch
            </a>
            <div className="flex items-center"> {/* Flex container for the social icons */}
              <FaFacebook className="text-2xl text-black-600 hover:text-green-600 mr-2 dark:text-white" />
              <FaTwitter className="text-2xl text-black-600 hover:text-green-600 mr-2 dark:text-white" />
              <FaInstagram className="text-2xl text-black-600 hover:text-green-600 dark:text-white" />
              <FaWhatsapp className="text-2xl text-black-600 hover:text-green-600 dark:text-white" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;