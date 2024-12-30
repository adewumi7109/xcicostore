"use client"
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Category from "./components/categoryies/Category";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { products } from "./data/products";
import FixedBar from "./components/fixed-bar/FixedBar";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState(''); // Empty string means "all categories"

  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
   <div>
    <Navbar/>
    <Banner searchQuery = {searchQuery} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery}/>
    {/* <Category/> */}
<FixedBar/>
  
    <div className="h-[10vh] bg-black text-white flex justify-center items-center overflow-hidden relative">
  <div className="absolute whitespace-nowrap animate-scroll">
    Welcome to the XCICO Store Marketplace, a peaceful haven for both buyers and sellers. Interested in selling for free? Text us on WhatsApp @ +2348165543283
  </div>
</div>


    <div className="h-[10vh]">

</div>
  
<Products filteredProducts={filteredProducts}/>
<Footer/>
   </div>
  );
}
