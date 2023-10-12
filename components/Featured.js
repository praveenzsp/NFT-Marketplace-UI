import React from 'react'
import Image from 'next/image'

function Featured() {
  return (
    <div className="md:mt-[200px] mt-[100px]">
      <div className="text-center mb-[50px]">
        <h1 className="text-white text-[40px] font-[700] tracking-[1px]">
          Featured Artworks
        </h1>
        <p className="text-[#FFFFFF80] text-[20px] font-[400] tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-flex-row gap-[15px] md:justify-between mb-[30px] items-center">
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
    </div>
  )
}

export default Featured