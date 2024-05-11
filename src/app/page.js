
import Header from "@/components/Home/Header/Header";
import About from "@/components/Home/About/About";
import ExploreCafe from "@/components/Home/OurCafe/ExploreCafe";
import Products from "@/components/Home/OurProducts/Products";
import Blog from "@/components/Home/Blogs/Blog";
import Visitus from "@/components/Home/Visit/Visitus";
export default function Home() {
  return (
    <>
      <main className="">
        <Header />
        <About />
        <ExploreCafe />
        {/* <Products /> */}
        <Blog />
        <Visitus />
      </main>
    </>
  );
}
