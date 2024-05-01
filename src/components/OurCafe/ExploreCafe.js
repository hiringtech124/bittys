import React from 'react'
import Image from 'next/image'
import header from './assets/header.png'
import "./css/explore.css"
function ExploreCafe() {
  return (
    <>
      <div className='h-screen max-lg:h-full w-full bg-yellow-200 bg-opacity-40'>



        <div className='flex flex-col items-center pt-10'>
          <Image src={header} className='max-lg:w-[250px] max-md:w-[200px] max-sm:w-[170px]'  alt='cafe header' />
          <div className='pb-5'>
            <h1 className='font-bold text-[60px] font-serif max-lg:text-[45px] max-md:text-[35px] max-sm:text-[25px]'>Explore our Cafe</h1>
          </div>
          <div className='w-[516px] h-[105px] text-[15px] max-lg:text-[13px] max-md:text-[11px] max-md:w-[400px] max-sm:w-[300px]'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
              Maecenas ac quam lacinia,
            </p>
          </div>
        </div>
        <div className='flex justify-center max-lg:grid max-lg:grid-cols-3 max-lg:gap-4 max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1 max-sm:gap-4
        max-md:ml-[50px] max-sm:ml-[30px] max-lg:pb-[30px]'>
          <div className=' chefS w-[310px] h-[400px] mr-[50px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]' >
            <div className=' flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Chef&apos;s Special</h1>
              <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit</p>
              <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
            </div>
          </div>
          <div className='italian w-[310px] h-[400px] mr-[50px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]' >
            <div className='flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Italian</h1>
              <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
              <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
            </div>
          </div>
          <div className=' baverage w-[310px] h-[400px] mr-[50px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]' >
            <div className=' flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Baverages</h1>
              <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
              <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
            </div>
          </div>
          <div className='sIndian w-[310px] h-[400px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]'  >
            <div className=' flex flex-col items-center'>
              <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>South Indian</h1>
              <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
              <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ExploreCafe