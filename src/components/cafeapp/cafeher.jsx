"use client"
import React from 'react'
import { useState , useEffect } from "react";
import menuData from "../../menu.json";
import Image from 'next/image';

import './css/cafeher.css'

const Cafeher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    
    if (searchTerm === "") {
      setFilteredItems([]);
      return;
    }

    const items = menuData.categories.flatMap(category => category.items);
    console.log(items)
    const filtered = items.filter(item => 
      item.itemName && item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filtered);
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm === "") {
      setFilteredItems([]);
      return;
    }

    const items = menuData.categories.flatMap(category => category.items);
    const filtered = items.filter(item => 
      item.itemName && item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("Filtered Items:", filtered); // Debugging line

    setFilteredItems(filtered);
  };
  console.log(filteredItems)

  const handleSelectItem = item => {
    setSelectedItem(item);
    setFilteredItems([]);
    setSearchTerm("");
  };

  const closePopup = () => {
    setSelectedItem(null);
  };
  return (
    <>
      <div className='cafehead relative text-[#fff] h-full w-full flex flex-col justify-center items-center pt-[10px] pb-[180px] max-sm:pb-[80px]'>
        <div className='w-[800px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[230px]'>
          <div className='flex flex-col items-center pt-[50px] max-sm:pt-[0px]' >
            <h1 className='font-serif font-bold text-[70px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[25px]'>Our Cafe</h1>
            <p className='w-[110%] text-center text-[22px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[8px] tracking-wide'>Experience the essence of flavor at Bitty&apos;s Cafe, where each dish is a masterpiece crafted with local ingredients and global inspiration. Indulge in our specialty coffees and homemade treats amidst a cozy atmosphere that feels like home. Join us for a culinary adventure that celebrates taste, creativity, and community.</p>
          </div>
        </div>
        <div className='pt-[70px] max-sm:pt-[20px] text-black'>
          <input className='text-black max-md:text-[16px] max-sm:text-[8px] border border-[#CFBCAE] w-[600px]  mr-[10px] max-xl:w-[500px] max-md:w-[400px] max-sm:w-[150px] h-[55px] max-md:h-[45px] max-sm:h-[25px] rounded-xl max-md:rounded-lg max-sm:text-[14px] pl-[50px] max-sm:pl-[20px]' placeholder='Search Our Menu' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch} className='bg-[#2B231D] text-[#fff] h-[55px] w-[100px] max-md:w-[80px] max-sm:w-[50px] max-md:h-[45px] max-sm:h-[25px] max-md:text-[14px] max-sm:text-[9px]  rounded-xl max-md:rounded-lg'>Search</button>
          {filteredItems.length > 0 && (
            <div className="dropdown text-black rounded-xl h-[150px] max-sm:h-[70px]">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="dropdown-item cursor-pointer max-sm:p-[5px] p-[10px] w-[600px] max-xl:w-[500px] max-md:w-[400px] max-sm:w-[150px] text-[20px] max-md:text-[16px] max-sm:text-[10px] font-serif flex justify-center rounded-xl"
                  onClick={() => handleSelectItem(item)}
                >
                  {item.itemName}
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedItem && (
          <div className="popup text-black">
            <div className="popup-content w-[400px] max-lg:w-[250px] max-sm:w-[150px] flex flex-col items-center relative">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <Image src={selectedItem.img}  alt={selectedItem.item} />
              <h2 className='text-[32px] max-lg:text-[28px] max-md:text-[22px] max-sm:text-[14px] font-serif font-bold w-[400px] max-lg:w-[200px] max-sm:w-[140px]  pb-[20px] max-sm:pb-[5px]'>{selectedItem.itemName}</h2>
              <p className='text-[26px] max-md:text-[22px] max-sm:text-[18px] font-serif font-semibold'>{selectedItem.price}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cafeher
