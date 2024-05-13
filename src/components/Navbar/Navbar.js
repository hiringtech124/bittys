"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/bittylogo.png'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import './navbar.css'
function Navbar() {
    let [open, setOpen] = useState(false);
    return (
        <>

            <div className='h-full w-full text-[#fff] w-full flex justify-between max-sm:justify-center max-sm:items-center'>
                <Link href="/"><Image className='mt-[20px] max-sm:w-[130px] ml-[100px] max-lg:ml-[50px] max-md:ml-[30px] max-sm:mr-[40px]' src={logo} alt='logo' /></Link>
                <ul className={`w-full gap-5 max-lg:gap-1 justify-end flex max-sm:flex-col max-sm:justify-center max-sm:gap-10 pt-[30px] pb-[30px] pr-[100px] max-xl:pr-[40px] max-lg:pr-[30px] max-sm:absolute max-sm:bg-black max-sm:bg-opacity-95 z-[5] max-sm:w-[100%] max-sm:h-screen ${open ? 'top-[0%]' : 'top-[-1490px]'}`}>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold text-center hover px-2 max-sm:mb-5'>Home</li></Link>
                    <Link href="/Menu" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover px-2 text-center max-sm:mb-5'>Menu</li></Link>
                    <Link href="/ourCafe" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover px-2 text-center max-sm:mb-5'>Our Cafe</li></Link>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center px-2 max-sm:mb-5'>Blog</li></Link>
                    <Link href="/about" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center px-2 max-sm:mb-5'>About Us</li></Link>
                    <Link href="/contactus" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover px-2 text-center '>Contact-Us</li></Link>
                </ul>
                <div onClick={() => setOpen(!open)} className='block sm:hidden absolute right-[5%] z-[6] flex '>
                    {
                        open ? <FaXmark  className='w-[30px] h-[30px]'/> : <GiHamburgerMenu className='w-[25px] h-[25px]'/>
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar