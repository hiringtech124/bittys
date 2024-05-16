import React from 'react'
import img1 from './assets/si1.png'
import img2 from './assets/si2.png'
import img3 from './assets/si3.png'
import img4 from './assets/si4.png'
import img5 from './assets/si5.png'
import img6 from './assets/si6.png'
import img7 from './assets/si7.png'
import img8 from './assets/si8.png'
import img9 from './assets/si9.png'
import img10 from './assets/si10.png'
import img11 from './assets/si11.png'
import img12 from './assets/si12.png'
import img13 from './assets/si13.png'
import img14 from './assets/si14.png'
import img15 from './assets/si15.png'
import img16 from './assets/si16.png'
import img17 from './assets/si17.png'

import Image from 'next/image'
function Sindian() {
  const items = [
    {
      img: img1,
      itemName: "Idli Sambhar",
      price: "60/-"
    },
    {
      img: img3,
      itemName: "Vada Sambhar",
      price: "60/-"
    },
    {
      img: img7,
      itemName: "Idli Vada Mix",
      price: "60/-"
    },
    {
      img: img5,
      itemName: "Fried Idli",
      price: "60/-"
    },
    {
      img: img8,
      itemName: "Plain Dosa",
      price: "70/-"
    },
    {
      img: img9,
      itemName: "Butter Plain Dosa",
      price: "80/-"
    },
    {
      img: img2,
      itemName: "Masala Dosa",
      price: "99/-"
    }, 
    {
      img: img10,
      itemName: "Butter Masala Dosa",
      price: "99/-"
    },
    {
      img: img11,
      itemName: "Schezwan Masala Dosa",
      price: "99/-"
    },
    {
      img: img12,
      itemName: "Paneer Masala Dosa",
      price: "99/-"
    },
    {
      img: img13,
      itemName: "Plain Uttapam",
      price: "99/-"
    },
    {
      img: img4,
      itemName: "Onion Uttapam",
      price: "99/-"
    },
    {
      img: img14,
      itemName: "Tomato Uttapam",
      price: "99/-"
    },
    {
      img: img15,
      itemName: "Veg Uttapam",
      price: "99/-"
    },
    {
      img: img16,
      itemName: "Plain Appe",
      price: "99/-"
    },
    {
      img: img6,
      itemName: "Veg Appe",
      price: "99/-"
    },
    {
      img: img17,
      itemName: "Veg Corn Appe",
      price: "99"
    },

  ]
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center px-[20px] max-[450px]:px-[0px]'>
        <h1 className='flex justify-start w-[100%] font-serif font-bold text-[#4D3029] text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-[450px]:text-[28px]'>South Indian</h1>
        <p className='font-serif text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[14px] max-[450px]:w-[200px] py-[10px]'>Experience the rich culinary heritage of South India on your plate.</p>
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

export default Sindian