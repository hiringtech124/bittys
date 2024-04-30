import Header from "@/components/Header";
import About from "@/components/About";
import ExploreCafe from "@/components/ExploreCafe";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import Visitus from "@/components/Visitus";
import Contact from "@/components/Contact";
export default function page() {
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
}
