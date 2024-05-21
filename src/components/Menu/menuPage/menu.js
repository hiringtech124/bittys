'use client'
import React, { useState , forwardRef } from "react";

import "./menu.css";
import Baverage from "./baverage/Baverage";
import Chinese from "./chinese/Chinese";
import Sindian from "./SouthIndia/Sindian";
import Italian from "./italian/Italian";
import Sandwich from "./sandwich/Sandwich";
import MainCourse from "./mainCourse/MainCourse";
import Combo from "./combo/Combo";
import Paratha from "./paratha/Paratha";
import Juices from "./juices/Juices";
import Other from "./others/Other";
import Image from "next/image";
import img1 from './assets/baverage.png'
import img2 from "./assets/chinese.png"
import img3 from './assets/Sindian.png'
import img4 from './assets/italian.png'
import img5 from './assets/sandwich.png'
import img6 from './assets/Mcourse.png'
import img7 from './assets/combo.png'
import img8 from './assets/paratha.png'
import img9 from './assets/juice.png'
import img10 from './assets/other.png'
import img11 from './assets/icetea.png'
import img12 from './assets/maggi.png'
import img13 from './assets/momo.png'
import img14 from './assets/shakes.png'
import img15 from './assets/soupdrink.png'
import IceTea from "./icetea/IceTea";
import Momos from "./momos/Momos";
import Shakes from "./shakes/Shakes";
import Maggi from "./maggi/Maggi";
import SoupDrink from "./soupDrink/SoupDrink";



const Menu = (props, ref) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    {
      label: "Beverages",
      img: img1,
      content: <Baverage />
    },
    {
      label: "Chinese",
      img: img2,
      content: <Chinese />
    },
    {
      label: "South Indian",
      img: img3,
      content: <Sindian />
    },
    {
      label: "Italian",
      img: img4,
      content: <Italian />
    }, {
      label: "Sandwich",
      img: img5,
      content: <Sandwich />
    },
    {
      label: "Main Course",
      img: img6,
      content: <MainCourse />
    },
    {
      label: "Combo's",
      img: img7,
      content: <Combo />
    },
    {
      label: "Paratha",
      img: img8,
      content: <Paratha />
    },
    {
      label: "Juices",
      img: img9,
      content: <Juices />
    },
    {
      label: "Other Offerings",
      img: img10,
      content: <Other />
    },
    {
      label: "Iced Tea",
      img: img11,
      content: <IceTea />,
    },
    {
      label: "Maggi",
      img: img12,
      content:<Maggi/> ,
    },
    {
      label: "Momos",
      img: img13,
      content:<Momos/>,
    },
    {
      label: "Shakes",
      img: img14,
      content: <Shakes/>,
    },
    {
      label: "Soups / Drinks",
      img: img15,
      content: <SoupDrink/>,
    },
  ];

  // const [Widht, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  // });

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // <>
    // {/* {Widht > 778 ? ( */}
    <>
      <div ref={ref} className=" h-full w-full bg-[#F5F9D6] flex flex-col items-center pt-[30px] ">
        <h1 className='font-serif font-bold text-[64px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[34px] max-[450px]:text-[30px] text-[#4D3029]'>Our Menu</h1>
        <p className='text-[24px] w-[60%] max-md:w-[80%] text-center max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] mb-[30px] mt-[30px] max-xl:mt-[15px]'>&quot;Indulge in our delectable menu, crafted with care and passion.&quot;</p>
        <div className="flex h-full justify-center gap-x-[100px] max-xl:gap-x-[50px] max-lg:gap-x-[0px] max-md:gap-x-[0px] max-[450px]:gap-x-[0px] w-full">

          <div className="grid grid-cols-1 gap-y-[10px] mt-[150px] max-[450px]:mt-[100px] max-md:mt-[60px] h-[600px] overflow-scroll  px-10 max-[450px]:px-[0px] pb-[50px]">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${index === activeTab ? "active" : ""} max-[450px]:mb-[20px] w-[150px] h-[200px] max-xl:w-[100px] max-xl:h-[140px] max-[450px]:w-[85px] max-[450px]:h-[90px] flex flex-col items-center`}
                onClick={() => handleTabClick(index)}
              >
                {/* {tab.label} */}
                <Image className='w-[150px] h-[150px] max-xl:w-[100px] max-xl:h-[100px] max-[450px]:w-[70px] max-[70px]:h-[110px] mb-1 ' src={tab.img} alt='img1' />

                <p className='text-[#00A890] max-xl:w-[140px] max-[450px]:w-[85px] text-center text-[20px] max-xl:text-[18px] max-[450px]:text-[14px] font-bold tracking-wider'>{tab.label}</p>
              </div>

            ))}
          </div>
          <div>

            <div className="  pb-[50px] w-full">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>

      </div>
    </>
    // ) : (
    //   <>
    //     <div className="tabs-container w-[25%] px-10 mt-40 max-md:px-0">
    //       {tabs.map((tab, index) => (
    //         <div className="accordion-item py-4" key={index}>
    //           <div
    //             // className="accordion-header flex justify-between"

    //             className={`tab ${index === activeIndex ? "active" : ""}`}
    //             onClick={() => toggleAccordion(index)}
    //           >
    //             {tab.label}
    //           </div>
    //           {activeIndex === index && (
    //             <div className="accordion-content">
    //               {tabs[activeIndex].content}
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </>
    // )}
    // </>
  );
};

export default forwardRef(Menu);