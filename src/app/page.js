import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import ExploreCafe from "@/components/ExploreCafe";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import Visitus from "@/components/Visitus";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ExploreCafe />
      <Products />
      <Blog />
      <Visitus />
      <Contact />
    </>
  );
};

export default Home;
