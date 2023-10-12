import React from "react";
import Image from "next/image";


function Brands() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row md:justify-between items-center mt-[100px] gap-[30px] md:gap-[0px] lg:gap-[0px] mx-[40px] md:mx-[0px] lg:mx-[0px]">
      <Image src="/Binance_logo logo.svg" width={300} height={60} />
      <Image src="/Ethereum logo.svg" width={192} height={60} />
      <Image src="/blockchain.svg" width={395} height={60} />
    </div>
  );
}

export default Brands;
