import Image from "next/image";
import Navbar from "./components/Header";
import Link from "next/link";
import Hero from "./components/Hero";
import Flash from "./components/Flash";
import Categories from "./components/Categories";
import Product from "./components/Product";
import Ourproducts from "./components/Ourproducts";
import Newarrival from "./components/Newarrivals";
import Section from "./components/Section";

export default function Home() {
  return (
    <div>
  <Hero/>
  <Flash/>        
  <Categories/>  
  <Product/> 
  <Ourproducts/> 
  <Newarrival/> 
  <Section/> 
    </div>
  );
}
