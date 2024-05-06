import React from 'react'
import Image from 'next/image'
import header from './assets/header.png'
import './css/about.css'
function Slideone() {
  return (
    <>
      <div className='about w-full h-full text-[#fff]   pb-[100px] max  max-sm:flex max-sm:flex-col max-sm:items-center' >
        <Image  className=' ml-[100px] max-md:ml-[50px] max-sm:ml-[0px] pt-[100px] w-[270px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px] ' src={header} alt='img'/>
        <h1 className=' ml-[100px] max-md:ml-[50px] max-sm:ml-[0px] font-serif font-bold text-[80px] max-xl:text-[70px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] text-[#2B231D] text-[#fff]'  >About Us</h1>
        <p className=' ml-[100px] max-md:ml-[50px] max-sm:ml-[0px] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[10px] text-justify tracking-wide w-[650px] max-xl:w-[570px] max-lg:w-[520px] max-md:w-[450px] max-sm:w-[380px] max-[450px]:w-[280px]'>Welcome to Bitty&apos;s Cafe, a vibrant culinary haven nestled in the heart of Bhopal! What began as a beloved dining destination where people would travel from afar to savor our flavorsome dishes has now evolved into a bustling cafe loved by locals and visitors alike.</p>

      </div>
    </>
  )
}

export default Slideone