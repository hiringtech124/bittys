import React from 'react'
import img1 from './assets/Ellipse 5.png'
import img2 from './assets/Ellipse 6.png'
import img3 from './assets/Ellipse 7.png'
import img4 from './assets/Ellipse 8.png'
import img5 from './assets/Ellipse 9.png'
import img6 from './assets/Ellipse 10.png'
import img7 from './assets/Ellipse 11.png'
import img8 from './assets/Ellipse 12.png'
import img9 from './assets/Ellipse 13.png'
import Image from 'next/image'
function MainCourse() {
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center px-[20px]'>
        <h1 className='flex justify-start w-[70%] font-serif font-bold text-[#4D3029] text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-[450px]:text-[22px]'>Main Course</h1>
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1 gap-x-[80px] max-xl:gap-x-[30px] max-lg:gap-x-[20px] gap-y-[100px] max-lg:gap-y-[50px] w-[100%] pt-[100px] max-xl:pt-[70px] max-md:pt-[50px]'>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%] " src={img1} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Matar Paneer</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>180/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img2} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Kadai Paneer</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>180/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img3} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Butter Paneer</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>180/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img4} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Rajma Chawal</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>50/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img5} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Chole Chawal</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>50/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img6} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Masala papad</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>30/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img7} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Jeera rice</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>110/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img8} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Jeera aalo</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>120/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%]" src={img9} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] tracking-wide mt-[30px]'>Boondi Raita</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>60/-</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCourse