import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-[#F9EDE1] bg-cover w-full flex flex-col items-center justify-center'>
        <div className='w-full flex justify-between max-md:flex-wrap max-[640px]:justify-center max-[640px]:gap-x-[200px] max-[490px]:gap-x-[100px] max-[360px]:gap-x-[50px] px-[100px] max-xl:px-[60px] max-lg:px-[40px] max-sm:px-[10px] py-[50px] max-sm:py-[10px]'>
          <div className='h-[150px] max-sm:h-[200px] mt-[100px] max-xl:mt-[50px] max-md:mt-[20px] max-xl:w-[400px] max-lg:w-[300px] max-sm:w-full max-lg:mt-[50px] max-sm:ml-[10px] max-md:mt-[0px] max-sm:w-[280px]'>
            <h1 className='font-serif font-bold text-[30px] pb-2 max-sm:w-[200px] '>News Letter</h1>
            <div className='pb-5'>
              <input type="text" placeholder="Email" className=" w-[460px] max-sm:w-[150px] max-xl:w-[200px] max-lg:w-[250px] max-sm:w-[300px] max-[400px]:w-[250px] max-lg:mb-1 bg-[#F9EDE1] border border-gray-300 rounded-md px-4 py-2 mr-2" />
              <button type="submit" className="bg-[#2B231D] max-sm:w-[80px] max-sm:text-[10px] hover:bg-blue-700 text-white py-2 px-4    rounded">Subscribe</button>
            </div>
            <p className='max-xl:w-[350px] max-lg:w-[300px] max-sm:w-[220px]'>Sign up with your email address to receive news and updates</p>
          </div>
          <div className='mt-[50px] max-xl:mt-[60px] mx-3'>
            <ul className='text-center text-[20px] max-lg:text-[18px] max-sm:text-[14px] flex flex-col gap-2'>
              <Link href='/'><li>Home</li></Link>
              <Link href='/Menu'><li>Products</li></Link>
              <Link href='/ourCafe'><li>Our Cafe</li></Link>
              <Link href='/'><li>Blog</li></Link>
              <Link href='/about'><li>About Us</li></Link>
            </ul>
          </div>
          <div className='w-[350px] max-xl:w-[300px] max-lg:w-[200px] max-sm:w-[150px] max-sm:mt-[30px] mt-[50px] flex flex-col items-end'>
            <h1 className='font-bold text-[20px] max-lg:text-[18px] max-sm:text-[15px]'>CONTACT US</h1>
            <p className='text-end mt-[10px] max-lg:text-[14px] max-sm:text-[12px]'>Plot No 123, Scheme no 78 Part 2 in Front of Hotel Grand Ten Vijay Nagar Indore, MP, District - Indore 452010</p>
            <p className='max-sm:text-[12px] text-end'>Call Us: +91 91794 44179 ,+91 96697 40666</p>
            <p className='max-sm:text-[12px]'>business@bittyscafe.com</p>
          </div>
        </div>
        <div className='w-full'>
          <div className='border-t-2 border-gray-400 h-[10px] w-full'></div>
          <div className='h-[70px] flex justify-center items-center'>
            <p className='font-bold text-[20px] max-md:text-[18px] text-center max-sm:text-[14px]'> &quot;Copyright © 2024 All Rights Reserved by HIRING TECH&quot;</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer