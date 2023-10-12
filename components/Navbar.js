import React, { useState } from "react";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

function Navbar() {
  const {width, height} = useWindowSize();
  const windowSize = width
  const [showSideMenu, setShowSideMenu] = useState(false)
  

  return (
    <div>
      <nav className="flex justify-between items-center my-[20px]">
        <h3 className="text-white text-[25px] font-bold">
          Psycho<span className="purple-text-gradient tracking-wider">Art</span>
        </h3>
        <input
          type="text"
          className={`rounded-[10px] w-[384px] h-[50px] bg-[#FFFFFF1A] px-[10px] text-[#FFFFFF80] tracking-[1px] ${windowSize>768 ? '' : 'hidden'}`}
          placeholder="🔍 Search items and collections"
        />
        <ul
          className={`flex justify-center items-center gap-[40px] 
          } ${windowSize>768 ? '' : 'hidden'}`}
        >
          <li className="text-white text-[20px]">Collections</li>
          <li className="text-white text-[20px]">Features</li>
          <li className="text-white text-[20px]">FAQ</li>
          <li>
            <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4]">
              Select Wallet
            </button>
          </li>
        </ul>

        <Image src="/Group 1.svg" width={55} height={55}  className={`${windowSize>768 ? 'hidden' : ''}`} onClick={()=>setShowSideMenu(true)}/>


        {/* side bar */}
        <div
          className={`w-[40vw] h-screen bg-[black] 
          } z-10 absolute top-0 right-0 text-left ${showSideMenu ? "" : "hidden"}`}
        >
          <ul className="mt-[10px] ml-[10px] flex flex-col gap-[10px]">
            <li className="text-white text-[12px]">Collections</li>
            <li className="text-white text-[12px]">Features</li>
            <li className="text-white text-[12px]">FAQ</li>

            <li>
              <button className="rounded-[5px] px-[5px] py-[2px] text-[12px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4]">
                  Select Wallet
                </button>
            </li>
              <li>
                <button
                  onClick={() => setShowSideMenu(false)}
                  className="rounded-[5px] px-[5px] py-[2px] text-[12px] text-white bg-red-500"
                >
                  Close
                </button>
              </li>
          </ul>
        </div> 
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* side menu */
}
{
  /* <div
          className={`w-[40vw] h-screen bg-black ${
            showMenu ? "" : "hidden"
          } z-10 absolute top-0 right-0 text-left`}
        >
          <ul className="mt-[10px] ml-[10px]">
            <li className="text-white text-[10px]">Collections</li>
            <li className="text-white text-[10px]">Features</li>
            <li className="text-white text-[10px]">FAQ</li>
            <li>
              <button className="rounded-[5px] px-[10px] py-[5px] text-[10px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4]">
                Select Wallet
              </button>
              <li>
                <button
                  onClick={() => setShowMenu(false)}
                  className="text-white text-[10px]"
                >
                  Close
                </button>
              </li>
            </li>
          </ul>
        </div> */
}
