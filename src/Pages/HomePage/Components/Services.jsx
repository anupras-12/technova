import { ChartNoAxesColumnIncreasing, Monitor, Settings, Smartphone } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
   <>
   <div className='p-10'>
    <div className='text-4xl font-bold text-center '>Our Services</div>
    <div className='text-gray-600 text-center mt-4'>We Provide complete digital solutions to help your business grow online.</div>
    <div className='flex gap-10 justify-center mt-10'>
      <div className='shadow-2xl p-3  '>
       
        <div className='text-center'><Monitor className='text-blue-600 '/><span className='font-bold '>Website Development</span><p>Modern,responsive and <br />SEO-friendly websites.</p></div>
      </div>
      <div className='shadow-2xl p-3 '>
       
        <div className='text-center'><Smartphone className='text-blue-600  '/><span className='font-bold '>App Development</span><p>Android & iOS app<br />development for your ideas.</p></div>
      </div>
      <div className='shadow-2xl p-3  '>
       
        <div className='text-center'><Settings className='text-blue-600 '/><span className='font-bold '>Software Development</span><p>Custom software to simplify<br />your business.</p></div>
      </div>
      <div className='shadow-2xl p-3  '>
       
        <div className='text-center'><ChartNoAxesColumnIncreasing className='text-blue-600 '/><span className='font-bold '>Digital Marketing</span><p>Get more traffic, leads and <br />grow your business online.</p></div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Services