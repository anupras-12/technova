import {  Package } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='m-2 flex justify-around items-center'>
        <div className='flex text-2xl font-bold items-center'><span className='text-blue-600'><Package/></span>TechNova</div>
        <nav className='flex'>
            <ul className='flex gap-9 text-gray-500 '>
                <li className='hover:text-blue-600'><a href="#">Home</a></li>
                <li className='hover:text-blue-600'><a href="#">Services</a></li>
                <li className='hover:text-blue-600'><a href="#">About</a></li>
                <li className='hover:text-blue-600'><a href="#">Projects</a></li>  
                <li className='hover:text-blue-600'><a href="#">Contact</a></li>         
            </ul>
        </nav>
        <button className='bg-blue-600 text-white p-4 rounded-2xl active:scale-95'>Get a Quote</button>
    </div>
    </>
  )
}

export default Navbar