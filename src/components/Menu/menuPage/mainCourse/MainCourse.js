import React from 'react'
import img1 from './assets/mc1.png'
import img2 from './assets/mc2.png'
import img3 from './assets/mc3.png'
import img4 from './assets/mc4.png'
import img5 from './assets/mc5.png'
import img6 from './assets/mc6.png'
import img7 from './assets/mc7.png'
import img8 from './assets/mc8.png'
import img9 from './assets/mc9.png'
import img10 from './assets/mc10.png'
import img11 from './assets/mc11.png'
import img12 from './assets/mc12.png'
import img13 from './assets/mc13.png'
import img14 from './assets/mc14.png'
import img15 from './assets/mc15.png'
import img16 from './assets/mc16.png'
import img17 from './assets/mc17.png'
import img18 from './assets/mc18.png'
import img19 from './assets/mc19.png'
import img20 from './assets/mc20.png'
import img21 from './assets/mc21.png'
import img22 from './assets/mc22.png'
import img23 from './assets/mc23.png'

import Image from 'next/image'
function MainCourse() {
  const items = [
    {
      img: img1,
      itemName: "Matar Paneer",
      price: "180/-"
    },
    {
      img: img2,
      itemName: "Kadai Paneer",
      price: "180/-"
    },
    {
      img: img3,
      itemName: "Butter Paneer",
      price: "180/-"
    },
    {
      img: img4,
      itemName: "Masala Chole",
      price: "150/-"
    },
    {
      img: img5,
      itemName: "Mix Veg",
      price: "150/-"
    },
    {
      img: img6,
      itemName: "Jeera Aloo",
      price: "120/-"
    },
    {
      img: img7,
      itemName: "Sev Tamatar",
      price: "120/-"
    },
    {
      img: img8,
      itemName: "Bhindi Masala",
      price: "120/-"
    },
    {
      img: img9,
      itemName: "Gobi Masala",
      price: "120/-"
    },
    {
      img: img10,
      itemName: "Dal Fry",
      price: "100/-"
    },
    {
      img: img11,
      itemName: "Dal Tadka",
      price: "120/-"
    },
    {
      img: img12,
      itemName: "Boondi Raita",
      price: "60/-"
    },
    {
      img: img13,
      itemName: "Chole Chawal",
      price: "50/-"
    },
    {
      img: img14,
      itemName: "Rajma Chawal",
      price: "50/-"
    },
    {
      img: img15,
      itemName: "Dal Chawal",
      price: "50/-"
    },
    {
      img: img16,
      itemName: "Steam Rice",
      price: "90/-"
    },
    {
      img: img17,
      itemName: "Jeera Rice",
      price: "110/-"
    },
    {
      img: img18,
      itemName: "Tawa Roti",
      price: "07/-"
    },
    {
      img: img19,
      itemName: "Butter Roti",
      price: "10/-"
    },
    {
      img: img20,
      itemName: "Roast Papad",
      price: "15/-"
    },
    {
      img: img21,
      itemName: "Fried Papad",
      price: "20/-"
    },
    {
      img: img22,
      itemName: "Masala Papad",
      price: "30/-"
    },
    {
      img: img23,
      itemName: "Classic Salad",
      price: "30/-"
    },

  ]
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center px-[20px] max-[450px]:px-[0px]'>
        <h1 className='flex justify-start w-[100%] font-serif font-bold text-[#4D3029] text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-[450px]:text-[28px]'>Main Course</h1>
        <p className='font-serif text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[14px] max-[450px]:w-[200px] py-[10px]'>Dive into a world of satisfying main course options, crafted just for you.</p>
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

export default MainCourse