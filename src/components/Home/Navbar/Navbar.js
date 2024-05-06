import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/bittylogo.png'
function Navbar() {
    return (
        <>

            <div className='h-full w-full text-[#fff] max-md:hidden w-full flex justify-between'>
                <Image className='mt-[20px] ml-[100px] max-lg:ml-[50px]' src={logo} alt='logo'/>
                <ul className='w-[600px] flex justify-between max-lg:w-[500px] max-md:w-[350px] pt-[30px] pb-[30px] pr-[100px] max-lg:pr-[30px]'>
                    <Link href="/Home"><li className='text-[22px] max-lg:text-[18px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Home</li></Link>
                    <Link href="/Menu"><li className='text-[22px] max-lg:text-[18px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Menu</li></Link>
                    <Link href="/ourCafe"><li className='text-[22px] max-lg:text-[18px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Our Cafe</li></Link>
                    <Link href="/Home"><li className='text-[22px] max-lg:text-[18px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Blog</li></Link>
                    <Link href="/about"><li className='text-[22px] max-lg:text-[18px] tracking-wide font-bold rounded-all hover:bg-brown-700'>About Us</li></Link>
                </ul>
            </div>

        </>
    )
}

export default Navbar