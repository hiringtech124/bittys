import React from 'react'
import img1 from './assets/bav1.png'
import img2 from './assets/bav2.png'
import img3 from './assets/bav3.png'
import img4 from './assets/bav4.png'
import img5 from './assets/bav5.png'
import img6 from './assets/bav6.png'
import Image from 'next/image'
function Baverage() {
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center'>
        <h1 className='flex justify-start w-[70%] font-serif font-bold text-[#4D3029] text-[64px] '>Baverage</h1>
        <div className='grid grid-cols-3 gap-x-[100px] gap-y-[100px] w-[80%] pt-[100px]'>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] relative'>
            <Image className="w-[150px] h-[150px] absolute top-[-35%] " src={img1} alt="Baverage"/>
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Ginger Tea</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>15/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px]  relative'>
            <Image className="w-[150px] h-[150px] absolute top-[-35%]" src={img2} alt="Baverage"/>
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Cold Coffee with Icecream</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>60/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] relative'>
            <Image className="w-[150px] h-[150px] absolute top-[-35%]" src={img3} alt="Baverage"/>
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Black Coffee</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>15/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] pb-[10px] relative'>
            <Image className="w-[150px] h-[150px] absolute top-[-35%]" src={img4} alt="Baverage"/>
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Chocolate Tea</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>15/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] pb-[10px] relative'>
            <Image className="w-[150px] h-[150px] absolute top-[-35%]" src={img5} alt="Baverage"/>
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Green Tea</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>30/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[220px] h-[260px] pb-[10px] relative  '>
            <Image className="w-[150px] h-[150px] absolute top-[-35%]" src={img6} alt="Baverage"/>
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Coffee</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>15/-</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Baverage