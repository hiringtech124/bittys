import React from 'react'
import img1 from './assets/chn1.png'
import img2 from './assets/chn2.png'
import img3 from './assets/chn3.png'
import img4 from './assets/chn4.png'
import img5 from './assets/chn5.png'
import img6 from './assets/chn6.png'
import img7 from './assets/chn7.png'
import img8 from './assets/chn8.png'
import img9 from './assets/chn9.png'
import img10 from './assets/chn10.png'
import img11 from './assets/chn11.png'
import img12 from './assets/chn12.png'
import img13 from './assets/chn13.png'
import img14 from './assets/chn14.png'
import img15 from './assets/chn15.png'
import img16 from './assets/chn16.png'
import img17 from './assets/chn17.png'
import img18 from './assets/chn18.png'
import Image from 'next/image'
function Chinese() {
  return (
    <>
      <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center px-[20px] max-[450px]:px-[0px]'>
        <h1 className='flex justify-start w-[100%] font-serif font-bold text-[#4D3029] text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-[450px]:text-[28px] '>Chinese</h1>
        <p className='font-serif text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[14px] max-[450px]:w-[200px] py-[10px]'>Indulge in the bold flavors of authentic Chinese cuisine.</p>
        <div className='grid grid-cols-4 h-[600px] max-[450px]:w-[210px] overflow-scroll pr-[20px] max-[450px]:pr-[0px] max-md:grid-cols-2 max-[450px]:grid-cols-1 max-[450px]:flex max-[450px]:flex-col max-[450px]:items-center gap-x-[20px] max-xl:gap-x-[20px] max-lg:gap-x-[20px] gap-y-[100px] max-xl:gap-y-[80px] max-[450px]:gap-y-[20px] w-[100%] pt-[100px] max-xl:pt-[70px] max-md:pt-[50px] max-[450px]:pt-[20px]'>
          <div className='flex flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px]  relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] max-xl:top-[-30%] absolute top-[-35%] max-[450px]:hidden" src={img1} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Veg Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px]  absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img2} alt="Baverage" />
            <h1 className='font-serif font-bold w-[90%] text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Hakka Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          
          
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img5} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Schezwan Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img6} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Punjabi Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img7} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Paneer Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img8} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Crispy Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img3} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Dry Manchurian</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img9} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Gravy Manchurian</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img10} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Manchurian Noodles</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img11} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Veg Fried Rice</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img12} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Schezwan Fried Rice</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img13} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Manchurian Fried Rice</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>99/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img14} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Paneer Fried Rice</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>119/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img15} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Veg Combi</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>119/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img16} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Veg Kothe</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>119/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img17} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Chilli Potato</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>139/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative'>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img4} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Chilli Paneer</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>139/-</h2>
          </div>
          <div className='flex  flex-col max-[450px]:h-full max-[450px]:w-[85%] max-[450px]:gap-2 items-center justify-center border border-[#8D4242] w-[210px] h-[250px] max-xl:w-[170px] max-xl:h-[190px] max-lg:w-[120px] max-lg:h-[140px] relative  '>
            <Image className="w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-lg:w-[70px] max-lg:h-[70px] absolute top-[-35%] max-xl:top-[-30%] max-[450px]:hidden" src={img18} alt="Baverage" />
            <h1 className='font-serif font-bold text-center text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[17px] tracking-wide mt-[30px] max-[450px]:mt-[0px]'>Crispy Corn</h1>
            <h2 className='font-serif font-bold text-center text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[18px] tracking-wide'>139/-</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chinese