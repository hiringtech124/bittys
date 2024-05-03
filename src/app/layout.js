import { Inter } from "next/font/google";
import "./globals.css";
import Contact from "@/components/Home/Contact/Contact";
import Navbar from "@/components/Home/Navbar/Navbar";

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
      <Contact/>
      
      </body>
    </html>
  );
}
