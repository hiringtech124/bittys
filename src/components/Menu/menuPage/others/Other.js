import React from 'react'
import img1 from './assets/Ellipse 5.png'
import img2 from './assets/Ellipse 6.png'
import img3 from './assets/Ellipse 7.png'
import img4 from './assets/Ellipse 8.png'
import img5 from './assets/Ellipse 9.png'
import img6 from './assets/Ellipse 15.png'
import Image from 'next/image'
function Other() {
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] pt-[50px] flex flex-col items-center'>
        <h1 className='flex justify-start w-[90%] font-serif font-bold text-[#4D3029] text-[64px] '>Other Offerings</h1>
        <div className='grid grid-cols-3 gap-x-[100px] gap-y-[200px] pt-[200px]'>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[320px] h-[360px] pb-[10px] relative'>
            <Image className="w-[250px] h-[250px] absolute top-[-35%] " src={img1} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Khamand</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>30/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[320px] h-[360px] pb-[10px] relative'>
            <Image className="w-[250px] h-[250px] absolute top-[-35%]" src={img2} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Bhel Puri</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>30/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[320px] h-[360px] pb-[10px] relative'>
            <Image className="w-[250px] h-[250px] absolute top-[-35%]" src={img3} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Pav Bhaji</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>80/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[320px] h-[360px] pb-[10px] relative'>
            <Image className="w-[250px] h-[250px] absolute top-[-35%]" src={img4} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>French fries</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>80/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[320px] h-[360px] pb-[10px] relative'>
            <Image className="w-[250px] h-[250px] absolute top-[-35%]" src={img5} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Rasgulla</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>30/-</h2>
          </div>
          <div className='flex flex-col items-center justify-center border border-[#8D4242] w-[320px] h-[360px] pb-[10px] relative  '>
            <Image className="w-[250px] h-[250px] absolute top-[-35%]" src={img6} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] tracking-wide mt-[30px]'>Gulab jamun</h1>
            <h2 className='font-serif font-bold text-center text-[32px] tracking-wide'>30/-</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Other