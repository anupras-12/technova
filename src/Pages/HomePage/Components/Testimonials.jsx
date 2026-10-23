import React from 'react'
import profile from '../../../assets/profile.jpg'

const Testimonials = () => {
  return (
    <>
    <div className='p-15 bg-blue-100 '>
      <div className='font-bold text-4xl text-center '>What Our Clients Says</div>
      <div className='flex mt-10 justify-center shadow-2xl bg-amber-50 inline-flex '>
        <div className=''>
          <img src={profile} alt="" className='w-20 rounded-[360px]' />
        </div>
        <div className='text-gray-500 ml-4'>"Amazing experience!The team delivered exactly what we needed and <br /> before the deadline. Very professional and easy to work. Highly recommended!"<br /><span>--Happy Client</span></div>
      </div>
    </div>
    </>
  )
}

export default Testimonials