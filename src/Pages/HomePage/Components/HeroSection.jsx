import React from 'react'
import HS from "../../../assets/HS.png"
import { Rocket, ShieldCheck, UserRoundStar } from 'lucide-react'

const HeroSection = () => {
  return (
   <>
   <div className='p-11 ml-14'>
   <div className=' flex'>
    <div className='bg-blue-50'>
        <div className='text-gray-500 '>YOUR DIGITAL PARTNER</div>
        <div className=' mt-2 text-5xl font-bold '>We create <br /><span className='text-blue-600'>Website & Apps</span> <br />That Grow Your Business</div>
        <div className='text-gray-500 mt-2'>We help business with modern websites, mobile apps, <br />software solutions and digital marketing to build a <br />stronger online presence.</div>
        <div className='mt-2 items-center'>
            <button className='bg-blue-600 text-white p-1 rounded-2xl active:scale-95 text-lg '>Get Started</button>
            <button className='ml-4 text-blue-600  border-2 rounded-2xl p-1 active:scale-95 bg-white text-lg'>Our Services</button>
        </div>
    </div>
    <div>
        <img src={HS} alt="image" className=' w-[500px] p-9 ml-10 ' />
    </div>
    
   </div>
   <div className='flex gap-15' >
     <div className='flex items-center'>
        <div className='text-blue-600 p-3 border-2 rounded-2xl'><Rocket /></div>
        <div className='ml-3'><span className='font-bold'>Fast Delivery</span><br />On-Time Project Delivery</div>

    </div>
    <div className='flex items-center'>
        <div className='text-blue-600 p-3 border-2 rounded-2xl'><ShieldCheck/></div>
        <div className='ml-3'><span className='font-bold'>Quality work</span><br />Clean & Modern Solution</div>

    </div>
    <div className='flex items-center'>
        <div className='text-blue-600 p-3 border-2 rounded-2xl'><UserRoundStar /></div>
        <div className='ml-3'><span className='font-bold '>Ongoing Support</span><br />We're Always Here</div>

    </div>
   </div>
   </div>
  
   
   </>
  )
}

export default HeroSection