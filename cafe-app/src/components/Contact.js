import React from 'react'

function Contact() {
  return (
    <>
      <div className='bg-[#F9EDE1] bg-cover w-full h-[439px] flex items-center justify-center relative max-md:h-[500px]'>
        <div className=' flex w-full  justify-between max-md:flex-col max-md:items-center'>
          <div className='w-[700px] h-[150px] ml-[100px] mt-[100px] max-xl:w-[500px] max-lg:mt-[50px] max-lg:ml-[50px] max-md:mt-[0px] max-sm:w-full'>
            <h1 className='font-serif font-bold text-[30px] pb-2 max-sm:w-[200px] '>News Letter</h1>
            <div className='pb-5'>
              <input type="text" placeholder="Email" className=" w-[460px] max-sm:w-[150px] max-xl:w-[250px] bg-[#F9EDE1] border border-gray-300 rounded-md px-4 py-2 mr-2" />
              <button type="submit" className="bg-[#2B231D] hover:bg-blue-700 text-white py-2 px-4 rounded">Subscribe</button>
            </div>
            <p className='max-xl:w-[350px] max-sm:w-[250px]'>Sign up with your email address to receive news and updates</p>
          </div>
          <div className='w-[350px] max-sm:w-[300px] max-sm:mr-[10px] max-sm:ml-[10px] h-[200px] flex justify-between mr-[200px] mt-[50px] max-lg:mr-[50px] max-md:ml-[50px]'>
            <div className='max-lg:mr-[20px]'>
              <ul className='flex flex-col items-center max-sm:ml-[20px]'>
                <li className='pb-3'><a>Home</a></li>
                <li className='pb-3'><a>Products</a></li>
                <li className='pb-3'><a>Our Cafe</a></li>
                <li className='pb-3'><a>Blog</a></li>
                <li className='pb-3'><a>About Us</a></li>
              </ul>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold text-[20px] pb-3'>Contact Us</h1>
              <p className='pb-3'>Call us : 2343452</p>
              <p>Email: xyz@gmail.com</p>
            </div>
          </div>


        </div>
        <div className='absolute bottom-[0px]'>
          <div className='border-t-2 border-gray-400 h-[10px] w-screen'></div>
          <div className='h-[70px] flex justify-center items-center'>
            <p className='font-bold text-[20px] max-md:text-[18px] max-sm:text-[14px]'>Copyright ©2024 . All rights reserved.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact