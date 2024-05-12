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
                <Image className='mt-[20px] max-sm:w-[130px] ml-[100px] max-lg:ml-[50px] max-md:ml-[30px]' src={logo} alt='logo' />
                <ul className={`w-[850px] gap-10 max-xl:gap-8 max-lg:gap-5 justify-end flex max-sm:flex-col max-sm:gap-0 max-xl:w-[700px]  max-lg:w-[600px] max-md:w-[450px] pt-[30px] pb-[30px] pr-[100px] max-lg:pr-[30px] max-sm:absolute max-sm:bg-black max-sm:bg-opacity-95 z-[5] max-sm:w-[100%] max-sm:h-[350px] ${open ? 'top-[0%]' : 'top-[-490px]'}`}>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold text-center hover max-sm:mb-5'>Home</li></Link>
                    <Link href="/Menu" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center max-sm:mb-5'>Menu</li></Link>
                    <Link href="/ourCafe" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center max-sm:mb-5'>Our Cafe</li></Link>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center max-sm:mb-5'>Blog</li></Link>
                    <Link href="/about" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center max-sm:mb-5'>About Us</li></Link>
                    <Link href="/contactus" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-bold hover text-center '>Contact-Us</li></Link>
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