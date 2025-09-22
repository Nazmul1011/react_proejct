
import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import bannerImage from "../../assets/inventory.png";
import { FaRegCirclePlay } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <div className='bg-colorbg max-w-screen-2xl container mx-auto py-10 px-10 flex flex-col lg:flex-row items-center lg:items-start justify-between'>
      {/* left section  */}
      <div className="text-center lg:text-left">
        <h1 className='text-black font-bold text-4xl'>
          Streamline Your Inventory with StockWise
        </h1>
        <p className='text-gray-400 mt-4'>
          Efficiently manage your stock, track sales, and optimize your supply chain with our intuitive inventory management system.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 py-6 justify-center lg:justify-start'>
          <button className='btn bg-primary text-white hover:bg-blue-700 flex items-center gap-2'>
            <span>Get Started</span>
            <HiArrowNarrowRight />
          </button>

          <button className='btn btn-outline btn-primary'>
            Contact Us
          </button>
        </div>
      </div>
  
      {/* right section */}
      <div className='h-50 w-60 mt-8 lg:mt-0 flex justify-end relative '>
         <img src={bannerImage} alt="bannerImage" />
      </div>
    </div>
  )
}



