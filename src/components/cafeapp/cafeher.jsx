import Image from 'next/image'
import React from 'react'
import img from './assets/esd.png'
import omg from './assets/df.png'

const Cafeher = () => {
  return (
    <>
      <div className='cafe-herp bg-[#F7F9E7] h-screen p-40 flex justify-center items-center'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-center items-center flex-col h-full'>
            <div className='absolute left-20 '>
              <Image src={omg} alt='j' />
            </div>
            <Image src={img} />
            <h1 className='text-[#2B231D] text-[100px]'>Our Cafe</h1>
            <p className='text-[#1E1E1E] text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lobortis elit et mi lobortis, sed varius tortor aliquam. Maecenas
              ac quam lacinia,
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cafeher
