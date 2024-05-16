import React from 'react'
import Image from 'next/image'
import header from './assets/header.png'
import "./css/explore.css"
import Link from 'next/link'
function ExploreCafe() {
  return (
    <>
      <div className='h-full max-lg:h-full w-full bg-yellow-200 bg-opacity-40 flex flex-col items-center'>



        <div className='flex flex-col items-center pt-10'>
          <Image src={header} className='max-lg:w-[250px] max-md:w-[200px] max-sm:w-[170px]'  alt='cafe header' />
          <div className='pb-5'>
            <h1 className='font-bold text-[60px] font-serif max-lg:text-[45px] max-md:text-[35px] max-sm:text-[25px]'>Explore our Cafe</h1>
          </div>
          <div className='w-[516px] h-[105px] text-[15px] max-lg:text-[13px] max-md:text-[11px] max-md:w-[400px] max-sm:w-[300px]'>
            <p>Welcome to Bitty&apos;s Cafe, where cool vibes and delicious flavors meet. Step inside and discover a unique cafe experience that&apos;s all about good coffee, great food, and laid-back ambiance.
            </p>
          </div>
        </div>
        
        <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-y-[30px] gap-x-[100px] max-lg:gap-x-[50px] max-lg:gap-y-[100px] gap-y-[150px] pb-[50px] max-sm:static relative'>
          <div className=' chefS w-[310px] h-[400px]  rounded-lg flex items-center pt-[190px] max-lg:w-[240px] max-lg:h-[300px] max-lg:pt-[100px]' >
            <div className=' flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Chef&apos;s Special</h1>
              <p className='pb-5 pl-5 text-[14px] leading-4 max-lg:text-[13px] text-[#fff]'>Experience culinary brilliance with our Chef&apos;s Specials—where innovation meets expertise for an unparalleled dining journey.</p>
              
            </div>
          </div>
          <div className='italian w-[310px] h-[400px] rounded-lg flex items-center pt-[190px] max-lg:w-[240px] max-lg:h-[300px]  max-lg:pt-[100px]' >
            <div className='flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Italian</h1>
              <p className='pb-5 pl-5 text-[14px] leading-4 max-lg:text-[13px] text-[#fff]'>Savor the essence of Italy with our authentic Italian cuisine, crafted with passion and tradition.</p>
              
            </div>
          </div>
          <div className=' baverage w-[310px] h-[400px] rounded-lg flex items-center pt-[190px] max-lg:w-[240px] max-lg:h-[300px] max-lg:pt-[100px]' >
            <div className=' flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Baverages</h1>
              <p className='pb-5 pl-5 text-[14px] leading-4 max-lg:text-[13px] text-[#fff]'>Quench your thirst with our refreshing beverages, crafted to perfection for your enjoyment.</p>
              
            </div>
          </div>
          <div className='sIndian w-[310px] h-[400px] flex items-center rounded-lg pt-[190px] max-lg:w-[240px] max-lg:h-[300px] max-lg:pt-[100px]'  >
            <div className=' flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>South Indian</h1>
              <p className='pb-5 pl-5 text-[14px] max-lg:text-[13px] text-[#fff] leading-4'>Embark on a flavor-filled journey to South India with our authentic dishes, celebrating the vibrant tastes of the region.</p>
              
            </div>
          </div>
          <Link href="/Menu" className='w-[220px] h-[70px] max-lg:w-[150px] max-lg:h-[60px] bg-[#5B422E] opacity-50 text-[#fff] rounded-xl z-2 absolute top-[44%] left-[35%] max-lg:top-[43%] max-sm:static max-sm:top-[0px] flex items-center justify-center  max-sm:mb-[20px]'><button className=''>Explore More</button></Link>

        </div>
      </div>
    </>
  )
}

export default ExploreCafe