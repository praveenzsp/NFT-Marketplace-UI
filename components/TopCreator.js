import React from "react";
import Image from "next/image";

function TopCreator() {
  return (
    <div className="mt-[200px]">
      <div className="text-center mb-[50px]">
        <h1 className="text-white text-[40px] font-[700] tracking-[1px]">
          Top Creators
        </h1>
        <p className="text-[#FFFFFF80] text-[20px] font-[400] tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row md:justify-between items-center gap-[15px]">
        <div
          id="card"
          className="bg-[#FFFFFF1A] rounded-[10px] relative p-[0px]"
        >
          <Image
            src="/creator1.png"
            width={414}
            height={294}
            className="mb-[0px] w-full"
          />
          <Image
            src="/photo1.png"
            width={111}
            height={139}
            className="absolute m-auto md:top-12 bottom-0 left-0 right-0 top-5"
          />
          <div className="text-center tracking-[1px] mt-[70px]">
            <p className="text-white text-[20px] font-[700]">John Wick</p>
            <p className="text-[#FFFFFF80] text-[15px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full mt-[20px] ">
            + Follow
          </button>
        </div>
        <div
          id="card"
          className="bg-[#FFFFFF1A] rounded-[10px] relative p-[0px]"
        >
          <Image
            src="/creator2.png"
            width={414}
            height={294}
            className="mb-[0px] w-full"
          />
          <Image
            src="/photo2.png"
            width={111}
            height={139}
            className="absolute m-auto md:top-12 bottom-0 left-0 right-0 top-5"
          />
          <div className="text-center tracking-[1px] mt-[70px]">
            <p className="text-white text-[20px] font-[700]">John Wick</p>
            <p className="text-[#FFFFFF80] text-[15px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full mt-[20px]">
            + Follow
          </button>
        </div>
        <div
          id="card"
          className="bg-[#FFFFFF1A] rounded-[10px] relative p-[0px]"
        >
          <Image
            src="/creator3.png"
            width={414}
            height={294}
            className="mb-[0px] w-full"
          />
          <Image
            src="/photo3.png"
            width={111}
            height={139}
            className="absolute m-auto md:top-12 bottom-0 left-0 right-0 top-5"
          />
          <div className="text-center tracking-[1px] mt-[70px] ">
            <p className="text-white text-[20px] font-[700]">John Wick</p>
            <p className="text-[#FFFFFF80] text-[15px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4] w-full mt-[20px]">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopCreator;
