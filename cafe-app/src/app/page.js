import Head from "next/head";
import View from "../components/View";
import Header from "@/components/Header";
import About from "@/components/About";
import ExploreCafe from "@/components/ExploreCafe";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import Visitus from "@/components/Visitus";
import Contact from "@/components/Contact"; 
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header/>
      <About/>
      <ExploreCafe/>
      <Products/>
      <Blog/>
      <Visitus/>
      <Contact/>
    </main>
  );
}
