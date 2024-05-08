import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/bittylogo.png'
import './navbar.css'
function Navbar() {
    return (
        <>

            <div className='h-full w-full text-[#fff] w-full flex justify-between max-sm:justify-center'>
                <Image className='mt-[20px] max-sm:w-[130px] ml-[100px] max-lg:ml-[50px] max-md:ml-[30px]' src={logo} alt='logo'/>
                <ul className='w-[850px] gap-10 max-xl:gap-8 max-lg:gap-5 justify-end flex max-xl:w-[700px]  max-lg:w-[600px] max-md:w-[450px] max-sm:hidden pt-[30px] pb-[30px] pr-[100px] max-lg:pr-[30px]'>
                    <Link href="/"><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] tracking-wide font-bold  hover'>Home</li></Link>
                    <Link href="/Menu"><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] tracking-wide font-bold hover'>Menu</li></Link>
                    <Link href="/ourCafe"><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] tracking-wide font-bold hover'>Our Cafe</li></Link>
                    <Link href="/"><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] tracking-wide font-bold hover'>Blog</li></Link>
                    <Link href="/about"><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] tracking-wide font-bold hover'>About Us</li></Link>
                    <Link href="/contactus"><li className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[12px] tracking-wide font-bold hover'>Contact-Us</li></Link>
                </ul>
            </div>

        </>
    )
}

export default Navbar