import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Banner from '../banner/Banner';
import Link from 'next/link';
function Navbar() {
  return (
    <>
    <nav className=' flex-no-wrap flex w-full items-center justify-between text-lg px-6 h-20 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 '>
      <Link href='/' className=' text-3xl text-[#ff7f00] font-bold'>Xstore</Link>
        {/* <FaShoppingCart size={25}/> */}
    </nav>
    </>
  )
}

export default Navbar