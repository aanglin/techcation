import Image from 'next/image'
import React from 'react'
import {GiAirplaneDeparture} from 'react-icons/gi'
import Clock from '../public/assets/clock.svg'
import Phone from '../public/assets/phone.svg'

function TopBar() {
  return (
    <div className='flex justify-evenly items-center py-2 px-4'>
        <div className='flex items-center pr-[60rem]'>
        <GiAirplaneDeparture size={70} className='text-blue-700' />
            <h1 className='pl-6 text-blue-700 text-[40px]'>TechCation</h1>
        </div>
        <div className='hidden md:flex items-center'>
        <div className='flex items-center p-5'>
            <Image
            src={Clock}
            alt="/"
            />
            <h2 className='p-2 text-xl text-gray-400'>8a-5p</h2>
        </div>
        <div className='flex items-center pl-12'>
            <Image 
            src={Phone}
            alt="/"
            />
            <h2 className='p-2 text-xl text-gray-400'>1-800-123-4567</h2>
        </div>
        </div>
        <button>Book A Trip</button>
    </div>
  )
}

export default TopBar