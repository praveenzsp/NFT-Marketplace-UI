import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row md:justify-between md:items-center md:mt-[100px] mt-[50px] justify-center items-center">
      <div>
        <h2 className="text-white text-[50px] font-bold leading-[60px] max-w-[490px] tracking-[1px]">
          Create, Sell & Collect Your Own Creative NFT
        </h2>

        <p className="text-[20px] text-[#FFFFFF80] font-[400] leading-[36px] max-w-[490px] tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>

        <div className="flex gap-[20px] my-[30px]">
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4]">
            Explore Now
          </button>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-[#FFFFFF1A] ">
            Sell NFT
          </button>
        </div>
        <ul className="flex flex-col md:flex-row md:justify-between md:gap-[120px] items-center gap-[20px]">
            <li>
                <p className="text-white text-[30px] font-[700]">37k+</p>
                <p className="text-[#FFFFFF80] font-[500] text-[20px]">Artworks</p>
            </li>
            <li>
                <p className="text-white text-[30px] font-[700]">20k+</p>
                <p className="text-[#FFFFFF80] font-[500] text-[20px]">Artists</p>
            </li>
            <li>
                <p className="text-white text-[30px] font-[700]">99k+</p>
                <p className="text-[#FFFFFF80] font-[500] text-[20px]">Aucations</p>
            </li>
        </ul>
      </div>

      {/* image container */}
      <div className="flex gap-[15px]">
        <div className="flex flex-col gap-[15px]">
            <Image src='/Rectangle-15.png' width={187} height={140}/>
            <Image src='/Rectangle 17.png' width={187} height={220}/>
            <Image src='/Rectangle 18.png' width={187} height={187}/>
        </div>
        <div className="flex flex-col gap-[15px]">
            <Image src='/Rectangle 16.png' width={187} height={108}/>
            <Image src='/Rectangle 19.png' width={187} height={220}/>
            <Image src='/Rectangle 20.png' width={187} height={159}/>
        </div>
        <div>
            <Image src='/Rectangle 21.png' width={187} height={412}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
