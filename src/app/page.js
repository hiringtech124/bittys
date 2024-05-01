
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import ExploreCafe from "@/components/OurCafe/ExploreCafe";
import Products from "@/components/OurProducts/Products";
import Blog from "@/components/Blogs/Blog";
import Visitus from "@/components/Visit/Visitus";
import Contact from "@/components/Contact/Contact"; 
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
