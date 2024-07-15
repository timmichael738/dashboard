import React, { useState } from 'react';
import Icons from './assets/icons/Icons.js';
import Hamburger from './components/hamburger.js';

const NavBar = ({ open, handleClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky bg-white dark:bg-darklight dark:border-darkborder flex gap-4 lg:z-10 items-center justify-between px-4 h-[60px] border-b border-black/10 detached-topbar relative" style={{ position: 'sticky', top: 0 }}>
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <button className="mr-4">
          <Hamburger handleClick={handleClick} open={open} />
        </button>

        {/* Search Bar */}
        <div className="relative hidden lg:block md:block">
          <input
            type="text"
            className=" px-2 border-black/10 dark:text-white/80 dark:placeholder:text-white/30 dark:border-darkborder dark:bg-dark dark:focus:border-white/30 focus:border-black/30 placeholder:text-black/50 border text-black text-sm rounded block w-full ltr:pl-3 rtl:pr-3 ltr:pr-7 rtl:pl-7 h-10 bg-[#f9fbfd] focus:ring-0 focus:outline-0"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center pl-3 pointer-events-none">
            <Icons.search />
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button>
          <Icons.fourSquare />
        </button>
        <button>
          <Icons.moon />
        </button>
        <button>
          <Icons.notification />
        </button>

        {/* User Info */}
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 focus:outline-none">
            <img src='https://sliced-tailwind.netlify.app/html/assets/images/user.png' className="rounded-full h-7 w-7 ltr:xl:mr-2 rtl:xl:ml-2" />
            <span className="text-sm">Username</span>
            <Icons.dropDown />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="text-sm absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
