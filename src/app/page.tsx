import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <Category/>

   </div>
  );
}
