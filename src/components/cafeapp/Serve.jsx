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

const Serve = () => {
  return (
    <>
      <div className='weserver '>
        <div className='max-w-5xl mx-auto flex justify-center items-center flex-col'>
          <div className='flexxx'>
            <Image src={img} />
            <h1 className='text-[100px] text-[#2B231D]'>We Serve</h1>
          </div>

          <div className='drinks flex justify-center items-center gap-2 '>
            <h1 className='text-[60px] text-[#2B231D]'>Drinks</h1>
            <span className='border-dashed w-[1024px] max-md:w-full border-t-2 border-black'></span>
          </div>

          <div className='cards flex flex-wrap justify-center items-center gap-20 mt-10'>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg1} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg2} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg3} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg4} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg5} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg6} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
            <div className='cardone flex gap-4 w-[405px] max-md:w-full'>
              <div className='imgs'>
                <Image src={imgg7} />
              </div>
              <div className='flex flex-col gap2'>
                <h4 className='text-[20px] text-[#000] font-playfair font-extrabold'>
                  vanilla latte
                </h4>
                <p className='text[20px] text-[#000] font-normal'>
                  Vanilla Latte is a coffee drink made with espresso, steamed
                  milk, and vanilla syrup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Serve
