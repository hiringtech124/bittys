import React from 'react'
import Image from 'next/image'
import slideImg from './assets/slide3.png'
import header from "./assets/header.png"
function Slidethree() {
  return (
    <>
      <div className='w-full h-full bg-[#F7F9E7] flex justify-center max-md:flex-col max-md:items-center max-md:p-[0px] max-md:pl-[0px] max-md:pt-[30px] max-md:pb-[50px] pl-[50px] p-[50px] '>
        <div className='mr-[200px] max-xl:mr-[120px] max-lg:mr-[50px] max-md:mr-[0px] max-md:flex max-md:flex-col max-md:items-center' >
          <Image className='max-lg:w-[250px] max-sm:w-[200px] ' src={header} alt='img' />
          <div className='w-[600px] max-xl:w-[550px] max-lg:w-[400px] max-md:w-[550px] max-sm:w-[380px] max-[450px]:w-[280px]'>
            <h1 className='font-serif font-bold text-[65px] max-xl:text-[55px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px] text-[#2B231D]'  >Cozy Ambiance and Environment </h1>
            <p className='text-[18px] max-xl:text-[16px] max-lg:text-[13px] max-md:text-[12px] max-sm:text-[10px] text-justify tracking-wide '>Welcome to Bitty&apos;s Cafe - a hub for connection and enjoyment. With a warm, spacious ambiance and games like carrom and chess, create unforgettable memories with friends. Situated in Indore&apos;s bustling tech hub, it&apos;s a favorite among professionals and food enthusiasts alike. Whether it&apos;s a quick lunch or a leisurely evening, our welcoming environment and delicious fare await you. Every dish is crafted with passion and served with a smile. Join us and experience the flavors that make Bitty&apos;s a culinary gem in Indore. See you soon!</p>
          </div>
        </div>
        <Image className='max-md:mt-[20px] w-[380px] h-[350px] max-xl:w-[320px] max-xl:h-[300px] max-lg:w-[280px] max-lg:h-[250px] max-sm:w-[180px] max-sm:h-[150px]' src={slideImg} alt="This is an image" />

      </div>
    </>
  )
}

export default Slidethree