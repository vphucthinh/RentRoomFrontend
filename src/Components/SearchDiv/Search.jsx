import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
       <form action="">
           <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
               <div className="flex gap-2 items-center">
               <AiOutlineSearch className="text-[25px] icon"/>
               <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]" placeholder="Search Here....."/>
                   <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
               </div>

               <div className="flex gap-2 items-center">
               <BsHouseDoor className="text-[25px] icon"/>
               <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]" placeholder="Search Room....."/>
                   <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
               </div>

               <div className="flex gap-2 items-center">
               <BsTelephone className="text-[25px] icon"/>
               <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]" placeholder="Search Phone....."/>
                   <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
               </div>


               <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">Search</button>

           </div>
       </form>


       <div className="secDiv flex items-center gap-10 justify-center">
             
              <div className="singleSearch flex items-center gap-2">
                  <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>

                  <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Start with</option>
                        <option value="">Contains</option>
                  </select>
              </div>

              <div className="singleSearch flex items-center gap-2">
                  <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>

                  <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Start with</option>
                        <option value="">Contains</option>
                  </select>
              </div>

              <div className="singleSearch flex items-center gap-2">
                  <label htmlFor="type" className="text-[#808080] font-semibold">Type:</label>

                  <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Start with</option>
                        <option value="">Contains</option>
                  </select>

              </div>

              <span className="text-[#a1a1a1] cursor-pointer">Clear all</span>

       </div>


    </div>
  )
}

export default Search
