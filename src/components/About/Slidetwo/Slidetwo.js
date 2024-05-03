import React from 'react'
import group from "./assets/slide2.png"
import Image from 'next/image'
import header from "./assets/header.png"
function Slidetwo() {
  return (
    <>
      <div className='w-full h-full bg-[#F7F9E7] flex justify-center max-md:flex-col max-md:items-center max-md:p-[0px] max-md:pl-[0px] max-md:pt-[30px] max-md:pb-[50px] pl-[50px] p-[50px] '>
        <Image className='mr-[200px] max-xl:mr-[120px] max-lg:mr-[50px] max-md:mr-[0px] w-[380px] h-[350px] max-xl:w-[320px] max-xl:h-[300px] max-lg:w-[280px] max-lg:h-[250px] max-sm:w-[180px] max-sm:h-[150px]' src={group} alt="This is an image" />
        <div className=' max-md:flex max-md:flex-col max-md:items-center' >
          <Image className='max-lg:w-[250px] max-sm:w-[200px] ' src={header} alt='img' />
          <div className='w-[550px] max-xl:w-[450px] max-lg:w-[330px] max-md:w-[500px] max-sm:w-[380px] max-[450px]:w-[280px]'>
            <h1 className='font-serif font-bold text-[65px] max-xl:text-[55px] max-lg:text-[40px] max-md:text-[40px] max-sm:text-[30px] text-[#2B231D]'  >Enjoy Best Quality Products</h1>
            <p className='text-[18px] max-xl:text-[16px] max-lg:text-[13px] max-md:text-[12px] max-sm:text-[10px] text-justify tracking-wide '>At Bitty&apos;s Cafe, we take pride in our diverse menu, offering a delightful fusion of flavors. Indulge in traditional South Indian dishes, comforting Chinese favorites, gourmet sandwiches, indulgent Maggi noodles, tantalizing Italian bites, and hearty parathas. Pair your meal with a cup of our signature tea or freshly brewed coffee for a truly satisfying experience.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slidetwo