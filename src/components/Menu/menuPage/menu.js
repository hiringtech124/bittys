'use client'
import React, { useState } from "react";
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



const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    {
      label: "Baverage",
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
      <div className=" h-full w-full bg-[#F5F9D6] flex flex-col items-center pt-[30px] ">
        <h1 className='font-serif font-bold text-[64px] text-[#4D3029]'>Our Menu</h1>
        <p className='text-[24px] mb-[30px] mt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.varius aliquam urna ut.</p>
        <div className="flex justify-center gap-x-[100px] w-full">

          <div className="grid grid-cols-2 gap-5 h-screen overflow-scroll px-10">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${index === activeTab ? "active" : ""} w-[150px] h-[200px]`}
                onClick={() => handleTabClick(index)}
              >
                {/* {tab.label} */}
                <Image className='w-[150px] h-[150px] mb-5 ' src={tab.img} alt='img1' />

                <p className='text-[#00A890] text-center text-[20px] font-bold tracking-wider'>{tab.label}</p>
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

export default Menu;