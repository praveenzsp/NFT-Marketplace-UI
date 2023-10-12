import Image from "next/image";
import React from "react";

function Collections() {
  return (
    <div className="">
      <div className="text-center mb-[50px]">
        <h1 className="text-white text-[40px] font-[700] tracking-[1px]">
          Collections
        </h1>
        <p className="text-[#FFFFFF80] text-[20px] font-[400] tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row items-center md:justify-between mb-[50px] gap-[10px] md:gap-[0px] lg:gap-[0px]">
        <button
          className="bg-[#FFFFFF1A] text-white px-[70px] py-[5px] rounded-[10px]
            w-[288px]"
        >
          Art
        </button>
        <button
          className="bg-gradient-to-br from-[#B75CFF] to-[#671AE4] text-white px-[70px] py-[5px] rounded-[10px]
            w-[288px]"
        >
          Sport
        </button>
        <button
          className="bg-[#FFFFFF1A] text-white px-[70px] py-[5px] rounded-[10px]
            w-[288px]"
        >
          Photography
        </button>
        <button
          className="bg-[#FFFFFF1A] text-white px-[70px] py-[5px] rounded-[10px]
            w-[288px]"
        >
          Pattern
        </button>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row gap-[15px] md:justify-between mb-[30px] items-center">
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection1.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection2.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection3.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-[15px] md:justify-between mb-[30px] items-center">
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection4.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection5.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between mb-[30px]">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection6.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-[15px] md:justify-between mb-[30px] items-center">
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection7.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection8.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
        <div id="card" className="bg-[#FFFFFF1A] rounded-[10px] p-[26px]">
          <Image
            src="/collection9.png"
            width={337}
            height={380}
            className="mb-[20px]"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF80] text-[20px] font-[400] mb-[10px]">
                @Johnny
              </p>
              <p className="font-[bold] text-white text-[20px] mb-[25px]">
                Yellow Painting
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF80] text-[15px] font-[400]">
                Current Bid
              </p>
              <p className="font-[bold] text-white text-[20px]">0.005 ETH</p>
            </div>
          </div>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
