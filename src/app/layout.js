import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitty's Cafe",
  description: "We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>                                        
      <Navbar/>
      {children}
      <Footer/>
      
      </body>
    </html>
  );
}
