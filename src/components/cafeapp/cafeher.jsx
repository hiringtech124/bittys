"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import menuData from "../../menu.json";
import './css/cafeher.css'

const Cafeher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems([]);
      return;
    }

    const items = menuData.categories.flatMap(category => category.items);
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

    setFilteredItems(filtered);
  };

  const handleSelectItem = (item) => {
    setFilteredItems([]);
    setSearchTerm("");

    // Find the category name of the selected item
    const category = menuData.categories.find(category => 
      category.items.some(menuItem => menuItem.itemName === item.itemName)
    );

    
   
    const categoryName = category.name;


    // Navigate to the menu page with the selected item's details and category name
    // router.push(`/Menu?value=${encodeURIComponent(categoryName)}`);
    router.push("/Menu")
   
   
  };

  return (
    <>
      <div className='cafehead relative text-[#fff] h-full w-full flex flex-col justify-center items-center pt-[10px] pb-[180px] max-sm:pb-[80px]'>
        <div className='w-[800px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[230px]'>
          <div className='flex flex-col items-center pt-[50px] max-sm:pt-[0px]' >
            <h1 className='font-serif font-bold text-[70px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[25px]'>Our Cafe</h1>
            <p className='w-[110%] text-center text-[22px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[11px] tracking-wide'>Experience the essence of flavor at Bitty&apos;s Cafe, where each dish is a masterpiece crafted with local ingredients and global inspiration. Indulge in our specialty coffees and homemade treats amidst a cozy atmosphere that feels like home. Join us for a culinary adventure that celebrates taste, creativity, and community.</p>
          </div>
        </div>
        <div className='pt-[70px] max-sm:pt-[20px] text-black'>
          <input className='text-black max-md:text-[16px] max-sm:text-[8px] border border-[#CFBCAE] w-[600px]  mr-[10px] max-xl:w-[500px] max-md:w-[400px] max-sm:w-[200px] h-[55px] max-md:h-[45px] max-sm:h-[25px] rounded-xl max-md:rounded-lg max-sm:text-[14px] pl-[50px] max-sm:pl-[20px]' placeholder='Search Our Menu' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch} className='bg-[#2B231D] text-[#fff] h-[55px] w-[100px] max-md:w-[80px] max-sm:w-[50px] max-md:h-[45px] max-sm:h-[25px] max-md:text-[14px] max-sm:text-[9px]  rounded-xl max-md:rounded-lg'>Search</button>
          {filteredItems.length > 0 ? (
            <div className="dropdown text-black rounded-xl h-[150px] max-sm:h-[70px]">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="dropdown-item cursor-pointer max-sm:p-[5px] p-[10px] w-[600px] max-xl:w-[500px] max-md:w-[400px] max-sm:w-[200px] text-[20px] max-md:text-[16px] max-sm:text-[11px] font-serif flex justify-center rounded-xl"
                  onClick={() => handleSelectItem(item)}
                >
                  {item.itemName}
                </div>
              ))}
            </div>
          ) : (
            searchTerm && (
              <div className="dropdown rounded-xl flex justify-center mt-[5px]">
                <h1 className="font-serif px-[10px] text-[24px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[10px]">No such food items</h1>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Cafeher


