'use client'

import Link from "next/link"
import { useState } from "react"
import React from 'react'
import {FaTruck, FaHeart, FaShoppingCart, FaTimes, FaBars} from "react-icons/fa"
import ThemeToggleButton from "./ThemeButton"
import { useStoreData } from "@/store/shopStore"


const Navbar = () => {
  const {getPickedItems,getWishlistItems} = useStoreData()
  // ✅ Get picked items and compute total quantity
  const pickedItems = getPickedItems()
  const totalPickedCount = pickedItems.reduce((sum,item)=> sum + item.count, 0)

  // ✅ Get wishlist items and count
  const wishlistItems = getWishlistItems()
  const wishlistCount = wishlistItems.length
  
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
            {wishlistCount > 0 && (
              <span className="absolute -top-3 right-3 ring-2
                     text-xs text-white bg-red-400 rounded-full px-1.5 py-0.5">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart className="hover:text-pink-400"/>
              {totalPickedCount > 0 && (
                <span className="absolute -top-3 right-3 text-xs text-white
                bg-pink-400 rounded-full px-1.5 py-0.5 ring-1">
                  {totalPickedCount}
                </span>
              )}
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