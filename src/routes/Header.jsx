import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <header className="flex justify-between border-b sticky top-0 w-full bg-white z-10">
      <div>
        <Link to="/">
          <img src="images\myntra_logo.webp" alt="logo" className="h-[60px] ml-5" />
        </Link>
        
      </div>
      <nav className="flex mt-5 gap-5">
        <a href="#" className="hover:text-red-400">
          Men
        </a>
        <a href="#" className="hover:text-red-400">
          Women
        </a>
        <a href="#" className="hover:text-red-400">
          Kids
        </a>
        <a href="#" className="hover:text-red-400">
          Home & Living
        </a>
        <a href="#" className="hover:text-red-400">
          Beauty
        </a>
        <a href="#" className="hover:text-red-400">
          Studio<sup className="text-red-500">New</sup>
        </a>
      </nav>
      <div className="flex gap-1">
        <CiSearch className="mt-5 text-xl" />
        <input
          type="text"
          placeholder="Search for Products, Brands and more"
          className="outline-none"
        />
      </div>
      <div className="flex gap-3 mr-7 mt-3">
        <div>
          <FaUser className="m-auto" />
          <span>Profile</span>
        </div>
        <div>
          <TbMoodCrazyHappy className="m-auto" />
          <span>Wishlist</span>
        </div>
        <div>
          <IoBagAdd className="m-auto" />
          <Link to="/bag" >
            <span>Bag</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
