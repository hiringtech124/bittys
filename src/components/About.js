import React from 'react'

function About() {
    return (
        <>
            <div className='h-screen w-full flex justify-end max-lg:justify-center max-sm:items-center'>

                <div className=' w-[600px] h-[400px] mr-[200px] mt-[200px] flex flex-col justify-between max-sm:mt-[0px]
                    max-lg:mr-[0px] max-lg:ml-[100px] max-sm:ml-[0px] max-sm:mr-[0px] max-md:h-[350px] max-sm:h-[400px] max-sm:items-center '>
                    <div className=''>
                        <h1 className='font-bold text-[70px] font-serif max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px]'>About our Cafe</h1>
                    </div>
                    <div className='w-[500px] max-sm:w-[300px]'>
                        <p className='text-[16px] max-md:text-[14px] max-lg:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                        </p>
                    </div>
                    <button className='w-[155px] h-[70px] bg-[#5B422E] max-md:w-[130px] max-md:h-[60px] max-sm:-[110p] max-sm:h-[55px] rounded-lg text-[#fff] text-[16px]'>Explore More</button>
                </div>
            </div>
        </>
    )
}

export default About