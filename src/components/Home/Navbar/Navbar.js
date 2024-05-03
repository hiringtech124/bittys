import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>

            <div className='h-full w-full bg-yellow-200 bg-opacity-40 max-md:hidden w-full flex justify-end pt-[30px] pb-[30px] pr-[100px] '>
                
                <ul className='w-[600px] flex justify-between max-lg:w-[450px] max-md:w-[350px]'>
                    <Link href="/Home"><li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Home</li></Link>
                    <Link href="/Menu"><li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Menu</li></Link>
                    <Link href="/ourCafe"><li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Our Cafe</li></Link>
                    <Link href="/Home"><li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'>Blog</li></Link>
                    <Link href="/about"><li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'>About Us</li></Link>
                </ul>
            </div>

        </>
    )
}

export default Navbar