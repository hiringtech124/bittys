import React from 'react'
import img1 from './assets/sw1.png'
import img2 from './assets/sw2.png'
import img3 from './assets/sw3.png'
import img4 from './assets/sw4.png'
import img5 from './assets/sw5.png'
import img6 from './assets/sw6.png'
import img7 from './assets/sw7.png'
import img8 from './assets/sw8.png'


import Image from 'next/image'
function Sandwich() {
  const items = [
    {
      img: img2,
      itemName: "Bombay Sandwich",
      price: "50/-"
    },
    {
      img: img1,
      itemName: "Veg Sandwich",
      price: "60/-"
    },
    {
      img: img7,
      itemName: "Veg Schezwan Sandwich",
      price: "70/-"
    },
    {
      img: img3,
      itemName: "Veg Cheese Sandwich",
      price: "80/-"
    },
    {
      img: img4,
      itemName: "Cheese Corn Sandwich",
      price: "80/-"
    },
    {
      img: img8,
      itemName: "Paneer Masala Sandwich",
      price: "80/-"
    },
    
    
    
    {
      img: img5,
      itemName: "Paneer Cheese Sandwich",
      price: "90/-"
    },
    {
      img: img6,
      itemName: "Bitty's Special Sandwich",
      price: "99/-"
    },
    
  ]
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center px-[20px] max-[450px]:px-[0px]'>
        <h1 className='flex justify-start w-[100%] font-serif font-bold text-[#4D3029] text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-[450px]:text-[28px]'>Sandwich</h1>
        <p className='font-serif text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[14px] max-[450px]:w-[200px] py-[10px]'>Elevate your sandwich game with our mouthwatering creations.</p>
        <div className='grid grid-cols-4 h-[600px] max-[450px]:w-[210px] overflow-scroll pr-[20px] max-[450px]:pr-[0px] max-md:grid-cols-2 max-[450px]:grid-cols-1 max-[450px]:flex max-[450px]:flex-col max-[450px]:items-center gap-x-[20px] max-xl:gap-x-[20px] max-lg:gap-x-[20px] gap-y-[100px] max-xl:gap-y-[80px] max-[450px]:gap-y-[20px] w-[100%] pt-[100px] max-xl:pt-[70px] max-md:pt-[50px] max-[450px]:pt-[20px]'>
          {items.map((items, index) => (
            <div
              key={index}
              className='flex flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px]  relative'

            >

              <Image className='w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%] max-[450px]:hidden' src={items.img} alt='img1' />
              <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>{items.itemName}</h1>
              <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>{items.price}</h2>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default Sandwich