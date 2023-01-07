import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import {useState,useEffect} from 'react';
import { IoBagCheckOutline } from "react-icons/io";
import { BsFillCartDashFill } from "react-icons/bs";

function Navbar({cart, addToCart, removeFromCart}) {
  const toggleClick = () => {
    const myCart = document.getElementById("myCart");
    if (myCart.classList.contains("hidden")) {
      myCart.classList.add("block");
      myCart.classList.remove("hidden");
    } else {
      myCart.classList.add("hidden");
      myCart.classList.remove("block");
    }
  };

  return (
    <>
      <header className="bg-gray-300 text-gray-600 body-font  border-b-2 border-gray-800">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">QuickIT</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900 cursor-pointer">
              Home
            </Link>
            <Link
              href="/viewProducts"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              View Products
            </Link>
            <Link href="#" className="mr-5 hover:text-gray-900 cursor-pointer">
              Track
            </Link>
            <Link
              href="/about"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              About
            </Link>
          </nav>
          <button className="text-white inline-flex items-center bg-gray-800 hover:bg-gray-700 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <Link
            href="#"
            className="flex flex-col justify-center items-center"
            onClick={toggleClick}
          >
            <BsFillCartDashFill className="text-lg cursor-pointer" />
            &nbsp; CART
          </Link>
        </div>
      </header>
      <div
        id="myCart"
        className="container bg-gray-700 z-20 p-5 text-white top-0 right-0 h-[100vh] w-1/3 hidden fixed"
      >
        <div className="close">
          <AiOutlineClose
            onClick={toggleClick}
            className="absolute top-2 right-2 text-2xl cursor-pointer"
          />
        </div>
        <ul className="mt-10 py-4">
          <li className="flex px-10 items-center justify-between pb-4 font-bold">
            Products
            <span className="flex items-center">Quantity</span>
          </li>
          <li className="flex px-10 items-center justify-between pb-4">
            1. Product Name
            <span className="flex items-center">
              <AiOutlineMinusCircle className="cursor-pointer" /> &nbsp; 2
              &nbsp; <AiOutlinePlusCircle className="cursor-pointer" />
            </span>
          </li>
        </ul>
        <Link
          href="/checkout"
          className="flex text-center w-full font-bold justify-center items-center bg-[#19345c] p-3 rounded-lg"
        >👜 Checkout</Link> 
      </div>
    </>
  );
}

export default Navbar;
