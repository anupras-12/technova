import React from 'react'
import p1 from '../../../assets/p1.jpg'
import p2 from '../../../assets/p2.jpg'
import p3 from '../../../assets/p3.jpg'

const Projects = () => {
  return (
  <>
  <div className='p-10'>
    <div className='font-bold text-4xl text-center'>Our Recent Projects</div>
    <div className='mt-3 text-gray-500 text-center'>Here are some of websites and applications we have worked on.</div>
    <div className='mt-8 flex gap-10 justify-center'>
      <div> 
        <img src={p1} alt="project 1" className='w-[300px] rounded-2xl' />
        <div className='font-bold text-center mt-2 '>Restaurant Website</div>
      </div>
      <div>
        <img src={p2} alt="project2" className='w-[300px] rounded-2xl'  />
        <div className='font-bold text-center mt-2'>Gym Management System</div>
      </div>
      <div>
        <img src={p3} alt="project3" className='w-[300px] rounded-2xl'  />
        <div className='font-bold text-center mt-2'>E-commerse Website</div>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default Projects