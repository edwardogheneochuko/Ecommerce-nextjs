'use client'

import Link from "next/link"
import { useState } from "react"
import React from 'react'
import {FaTruck, FaHeart, FaShoppingCart, FaTimes, FaBars} from "react-icons/fa"
import ThemeToggleButton from "./ThemeButton"


const Navbar = () => {
  const inputStyles = 'hover:text-amber-600 cursor-pointer'

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <nav className="sticky top-0 z-50 bg-slate-50 px-6 md:px-20 py-4 flex items-center
    justify-between dark:bg-neutral-800 border-b-4 dark:border-b-gray-500">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-2xl font-bold text-pink-600
            dark:text-amber-600">
                ECommerce
            </span>
            <span className="text-sm text-gray-500 dark:text-white tracking-widest self-center">
                Shopping Store
            </span>
        </div>
        {/*center section */}
        <ul className="hidden md:flex gap-2 sm:gap-8 text-gray-700 font-medium dark:text-white">
            <li>
                <Link href="/" className={inputStyles}>Home</Link>
            </li>
            <li className={inputStyles}>New Arrivals</li>
            <li className={inputStyles}>Top Sellers</li>
            <li>
                <Link href="/products" className={inputStyles}>
                  Products
                </Link>
            </li>
        </ul>
        {/* right section icons */}
        <div className="flex items-center gap-6 text-gray-700 text-xl dark:text-white">
         <div className="flex gap-6">
          <FaTruck className="hover:text-pink-400" />
          <Link href="/wishlist" className="relative">
            <FaHeart className="hover:text-pink-400" />
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart className="hover:text-pink-400"/>
          </Link>
          <ThemeToggleButton />
         </div>
        

         {/* menu icon */}
         <div className="md:hidden flex ">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <FaBars className="text-2xl hover:text-pink-400 cursor-pointer"/>
                     : <FaTimes className="text-2xl hover:text-pink-400 cursor-pointer" />}
                </button>
            </div> 
          </div>
        {!isMenuOpen && <ul className="absolute top-full left-0 w-full bg-white flex
        flex-col items-center gap-4 py-4 text-gray-400 font-medium md:hidden shadow-md
        dark:bg-neutral-700 dark:text-white">
           <li>
            <Link href="/" className={inputStyles} onClick={toggleMenu}>
              Home
            </Link>
           </li>
           <li className={inputStyles} onClick={toggleMenu}> New Arrivals </li>
           <li className={inputStyles} onClick={toggleMenu}> Top Sellers </li>
           <li>
            <Link href="/products" className={inputStyles} onClick={toggleMenu}>
              Products
            </Link>
           </li>
        </ul>}
    </nav>
  )
}

export default Navbar