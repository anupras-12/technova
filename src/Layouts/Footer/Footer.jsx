import { Mail, MapPinPen, Package, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
  <>
  <div className='p-10 bg-black'>
    <div className='flex justify-around gap-6 text-white'>
      <div className='flex'><span><Package /></span>TechNova</div>
      <nav className='flex'>
        <ul className='flex gap-7'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

    </div>
    <div className='text-white flex mt-10 justify-around'>
      <div className='flex'><span><Mail /></span>info@yourwebsite.com</div>
      <div className='flex'><span><Phone /></span>+91 98765 43210</div>
      <div className='flex'><span><MapPinPen/></span>123,Your Street,Your City</div>
    </div>
  </div>
  </>
  )
}

export default Footer