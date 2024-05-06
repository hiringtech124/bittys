import React from 'react'
import img from './assets/esd.png'
import imgg from './assets/Rectangle 29s.png'
// import imgg from './assets/Rectangle 29s.png'
import imgg1 from './assets/Rectangle 29 (1).png'
import imgg2 from './assets/Rectangle 29 (2).png'
import imgg3 from './assets/Rectangle 29 (3).png'
import imgg4 from './assets/Rectangle 29 (4).png'
import imgg5 from './assets/Rectangle 29 (5).png'
import imgg6 from './assets/d.png'
import imgg7 from './assets/ee.png'
import Image from 'next/image'
import food1 from './assets/r1.png'
import food2 from './assets/r2.png'
import food3 from './assets/r3.png'
import food4 from './assets/r4.png'
import food5 from './assets/r5.png'
import food6 from './assets/r6.png'


const Serve = () => {
  return (
    <>
      <div className='w-full h-full bg-[#F7F9EB] flex flex-col items-center pt-[30px] text-[#2B231D]'>

        <Image className='max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px] max-[670px]:w-[100px]' src={img} alt='header' />
        <h1 className='font-serif font-bold text-[70px] max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-[670px]:text-[30px] '>We Serve</h1>

        <div className='flex w-[90%] justify-center items-center gap-2 '>
          <h1 className='text-[60px] max-xl:text-[50px] max-lg:text-[40px] max-md:text-[30px] max-[670px]:text-[20px] font-serif font-bold text-[#2B231D]'>Drinks</h1>
          <span className='border-dashed w-full border-t-2 border-black'></span>
        </div>

        <div className='flex flex-wrap justify-center max-sm:grid max-sm:grid-cols-1 gap-5 py-[20px]'>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={imgg} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-md:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>VANILLA LATTE</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Vanilla Latte is a coffee drink made with espresso, steamed milk, and vanilla syrup</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={imgg1} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>VANILLA CAPPUCCINO</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-md:leading-4 max-sm:leading-3 tracking-tight'>vanilla cappuccino is a coffee drink that is made with espresso, steamed milk, and foam that has been flavored with vanilla syrup.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={imgg2} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-md:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>GREEN TEA</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>sweet, bittersweet, nutty, vegetal, buttery, floral, swampy, fruity, and oceanic.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={imgg3} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>TANGERINE WHITE CHOCOLATE CAPUCHINO</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-md:leading-4 max-sm:leading-3 tracking-tight'>blend of tangerine white chocolate sauce, espresso & cream, topped with yummy whipped cream, Serving</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={imgg4} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>HOT CHAI LATTE</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Hot chocolate is an Indian beverage popular throughout South Asia</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={imgg5} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-md:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>ESPRESSO</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Espresso is a coffee -brewing method of Italian origin.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={imgg6} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-md:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>KULHAD TEA</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Chai, when served in kulhads, becomes extra sweet and special.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={imgg7} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>CHAI</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-md:leading-4 max-sm:leading-3 tracking-tight'>Vanilla cappuccino is a coffee drink that is made with espresso, steamed milk, and foam that has been flavored with vanilla syrup.</p>
            </div>
          </div>
        </div>

        {/* food section */}
        <div className='flex w-[90%] justify-center items-center gap-2 '>
          <h1 className='text-[60px] max-xl:text-[50px] max-lg:text-[40px] max-md:text-[30px] max-[670px]:text-[20px] font-serif font-bold text-[#2B231D]'>Foods</h1>
          <span className='border-dashed w-full border-t-2 border-black'></span>
        </div>

        <div className='flex flex-wrap justify-center max-sm:grid max-sm:grid-cols-1 gap-5 pt-[30px] pb-[50px]'>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={food1} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-md:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>GARLIC BREAD</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Indulge in the aromatic bliss of our garlic toast, perfectly toasted to garlicky perfection.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={food2} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>CHEESE TOAST</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-md:leading-4 max-sm:leading-3 tracking-tight'>Savor the irresistible crunch of our cheesy toast, a delightful treat for any time of day.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={food3} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-md:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>PASTA</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Treat yourself to a taste of Italy with our exquisite pasta dishes, expertly prepared to tantalize your taste buds.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={food4} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>SANDWICH</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-md:leading-4 max-sm:leading-3 tracking-tight'>Experience sandwich perfection with our delectable creations, crafted with fresh ingredients and bursting with flavor.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] flex gap-3'>
            <Image src={food5} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-1'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>NOODLES</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Satisfy your cravings with our flavorful noodles, a culinary journey that delights with every slurp.</p>
            </div>
          </div>
          <div className='w-[550px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] pb-[20px] max-sm:pb-[10px] flex gap-3'>
            <Image src={food6} alt='img' className='w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-md:w-[80px] max-md:h-[80px]'/>
            <div className='pt-2 max-lg:pt-0'>
              <h1 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] font-extrabold font-serif'>PANCAKE</h1>
              <p className='text-[15px] max-xl:text-[14px] max-lg:text-[13px] max-md:text-[12px] max-sm:leading-4 tracking-tight'>Indulge in fluffy perfection with our mouthwatering pancakes, served with a touch of sweetness to brighten your day.</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Serve
