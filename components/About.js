import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="md:my-[150px] lg:my-[150px] my-[100px]">
      <div className="text-center mb-[50px]">
        <h1 className="text-white text-[40px] font-[700] tracking-[1px]">
          About Us
        </h1>
        <p className="text-[#FFFFFF80] text-[20px] font-[400] tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>


      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between md:gap-[110px] lg:gap-[110px] gap-[50px]">
        <Image src="/Group 18.png" width={503} height={755} />

        <div>
          <h2 className="text-[white] text-[30px] font-[700] tracking-[1px] mb-[10px]">
            Get Popular NFT
          </h2>
          <p className="text-[20px] text-[#FFFFFF80] font-[400] tracking-[1px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{" "}
          </p>
          <button className="rounded-[10px] px-[20px] py-[10px] text-[20px] text-white bg-gradient-to-br from-[#B75CFF] to-[#671AE4]">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
