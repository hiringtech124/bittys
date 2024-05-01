import React from 'react'
import Image from 'next/image'
import header from './assets/header.png'
import './css/product.css'

function Products() {
  return (
    <>
      <div className='backImg h-full w-full flex flex-col items-center max-md:h-full'>
        <div className='w-full flex justify-between max-sm:flex-col max-sm:items-center'>
          <div className=' flex flex-col items-center ml-[200px] mt-[20px] max-xl:ml-[150px] max-lg:ml-[80px] max-sm:ml-[0px]'>
            <h1 className='font-bold text-[50px] font-serif tracking-wide max-xl:text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] '>Our Products</h1>
            <Image src={header} className='w-[320px] max-xl:w-[280px] max-lg:w-[250px] max-md:w-[200px] max-sm:w-[150px]' alt='header' />
          </div>
          <button className='mt-[50px] max-sm:mt-[15px] mr-[200px] max-xl:mr-[150px] max-lg:mr-[80px] max-sm:mr-[0px] max-lg:w-[120px] max-sm:w-[100px] max-lg:h-[50px] max-sm:h-[30px] max-sm:text-[13px] bg-[#5B422E] rounded-lg w-[155px] h-[60px] text-[#fff] text-[16px]'>Explore More</button>
        </div>
        <div className='flex mt-[30px] max-md:flex-col pb-[120px] max-sm:pb-[65px]'>
          <div className='flex flex-col mr-[150px] max-xl:mr-[80px] max-lg:mr-[30px] max-sm:mr-[0] max-sm:ml-[10px] '>
            <div className='mb-[15px] max-sm:mb-[5px] '>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
            <div className='mb-[15px]'>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
            <div className='mb-[15px]'>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
            <div className='max-md:mb-[15px]'>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
          </div>

          <div className='flex flex-col max-sm:ml-[10px]'>
            <div className='mb-[15px]'>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
            <div className='mb-[15px]'>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
            <div className='mb-[15px]'>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
            <div className=''>
              <h1 className='font-serif text-[30px] font-bold max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[17px]'>Product 1-----------------------₹100</h1>
              <p className='font-serif text-[18px] w-[500px] max-xl:w-[400px] max-xl:text-[16px] max-lg:w-[350px] max-lg:text-[15px] max-sm:text-[10px] max-sm:w-[250px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products