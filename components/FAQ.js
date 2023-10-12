import React from 'react'

function FAQ() {
  return (
    <>
    <div className="text-center mb-[50px] my-[200px]">
        <h1 className="text-white text-[40px] font-[700] tracking-[1px]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#FFFFFF80] text-[20px] font-[400] tracking-[1px]">
          Wanna ask something ?
        </p>
      </div>
    <div className='flex flex-col justify-between items-center md:flex-row lg:flex-row'>
        <div>
            <div className='flex justify-between items-center border-b-2 border-[#FFFFFF80]
            pb-[20px] gap-[25vw]'>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>Lorem ipsum ipsum ?</p>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>+</p>
            </div>
            <div className='flex justify-between items-center border-b-2 border-[#FFFFFF80]
            pb-[20px]'>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>Lorem ipsum ipsum ?</p>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>+</p>
            </div>
            <div className='flex justify-between items-center border-b-2 border-[#FFFFFF80]
            pb-[20px]'>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>Lorem ipsum ipsum ?</p>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>+</p>
            </div>
        </div>
        <div>
            <div className='flex justify-between items-center border-b-2 border-[#FFFFFF80]
            pb-[20px] gap-[25vw]'>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>Lorem ipsum ipsum ?</p>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>+</p>
            </div>
            <div className='flex justify-between items-center border-b-2 border-[#FFFFFF80]
            pb-[20px]'>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>Lorem ipsum ipsum ?</p>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>+</p>
            </div>
            <div className='flex justify-between items-center border-b-2 border-[#FFFFFF80]
            pb-[20px]'>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>Lorem ipsum ipsum ?</p>
                <p className='text-[20px] font-[400] text-[#FFFFFF80]'>+</p>
            </div>
        </div>
    </div>
    <div className='text-center bg-gradient-to-br from-[#B75CFF] to-[#671AE4] rounded-[10px] md:mt-[200px] mt-[50px] flex flex-col justify-center items-center py-[50px]'>
        <h3 className='text-[white] text-[50px] font-[700] md:max-w-[500px] max-w-[250px]'>Get ready to collect our NFT</h3>
        <button className='bg-[#FFFFFF80] px-[20px] py-[10px] rounded-[10px] mt-[30px] text-white'>Get Started</button>
    </div>
    </>
  )
}

export default FAQ