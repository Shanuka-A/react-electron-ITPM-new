import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { Link } from "react-router-dom"; // Don't forget to import Link from react-router-dom

const Navbar = (props) => {
  const { onOpenSidenav } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link to="/registration" className="text-black-600 dark:text-white">
            Login
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black-600 dark:text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black-600 dark:text-white">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="relative rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

