import React from 'react'
import about from '../../../assets/about.jpeg'
import { Lightbulb, Target, UserGroup } from 'lucide-react'

const About = () => {
  return (
    <>
    <div className='p-10 flex justify-center bg-gray-200'>
      <div>
        <img src={about} alt="laptop image" className='w-[450px] rounded-2xl' />
      </div>
      <div className='ml-8'>
        <div className='font-bold text-4xl '>About Us</div>
        <p className='mt-7 text-gray-600'>We are a passionate team of developers, designers and digital marketers <br /> focused  on creating powerful  digital products for business. Our goal is <br />to deliver simple,clean and effective solutions that bring real results.</p>
        <div className='flex gap-3 mt-10 '>
        <div><span className='flex font-bold'><Target className='text-blue-600  '/>Client Focused</span><p className='ml-4 text-gray-500'>Your Goals,Our Priority</p></div>
        <div ><span className='flex font-bold'><Lightbulb className='text-yellow-400  '/>Creative Ideas</span><p className='ml-4 text-gray-500'>Fresh Ideas for Growth</p></div>
        <div ><span className='flex font-bold'><UserGroup className='text-blue-600  '/>Reliable Support</span><p className='ml-4 text-gray-500'>Long-Term Partnership</p></div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default About