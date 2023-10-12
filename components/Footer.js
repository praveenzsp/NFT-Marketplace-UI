import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row md:justify-between md:items-start items-center md:mt-[200px] mt-[50px] text-center gap-[20px] md:gap-[0px] md:pb-[100px] pb-[30px]'>
        <div className='md:text-left text-center'>
            <h3 className="text-white text-[20px] font-bold">
            Psycho<span className="purple-text-gradient tracking-wider">Art</span>
            </h3>
            <p className='text-[#FFFFFF80] text-[15px] font-[400] md:max-w-[288px] mt-[20px]'>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
        </div>

        <ul className='flex flex-col gap-[20px]'>
            <li className='font-[700] text-[20px] text-white'>About</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Product</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Resource</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Terms & Conditions</li>
            <li className='text-[#FFFFFF80] text-[15px]'>FAQ</li>
        </ul>

        <ul className='flex flex-col gap-[20px]'>
            <li className='font-[700] text-[20px] text-white'>Company</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Our Team</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Partner with us</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Privacy & Policy</li>
            <li className='text-[#FFFFFF80] text-[15px]'>Features</li>
        </ul>

        <ul className='flex flex-col gap-[20px]'>
            <li className='font-[700] text-[20px] text-white'>Contact</li>
            <li className='text-[#FFFFFF80] text-[15px]'>+012 3456789</li>
            <li className='text-[#FFFFFF80] text-[15px]'>adorableprogrammer@gmail.com</li>
            <ul className='flex justify-between items-center'>
                <li><Image src='/youtube.png' width={25} height={25}/></li>
                <li><Image src='/discord.png' width={25} height={25}/></li>
                <li><Image src='/instagram.png' width={25} height={25}/></li>
            </ul>
        </ul>
    </div>
  )
}

export default Footer