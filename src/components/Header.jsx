import React, { useState } from 'react'
import logoImage from '../assets/image/rslogo-.png'
import { MdMenu, MdClose } from "react-icons/md";
import Button from './UI/Button'

function Header() {

      const[toggle, settoggle] = useState(false);
  return (
    <div>
      <nav className='w-full h-20 flex items-center justify-around mb-16 md:px-4 bg-gray-800 shadow-xl fixed z-20'>
                    <a href="#home"><img src={logoImage} alt="Logo" className='h-16'/></a>

                    <div className=''>
                      <ul className='hidden md:flex space-x-6 text-xl font-semibold text-gray-300 '>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#home">Home</a></li>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#about">About</a></li>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#portfolio">Portfolio</a></li>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#education">Education</a></li>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#skills">Skills</a></li>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#experience">Experience</a></li>
                        <li className='hover:text-gray-600 transition ease-out duration-500' ><a href="#contact">Contact</a></li>
                      </ul>
                    </div>

                    <div>
                      <ul className='flex text-4xl text-white'>
                      {
                        toggle ?
                        <li><MdClose onClick={() =>settoggle(!toggle)} className='text-5xl text-gray-400 md:hidden block'/></li>
                        :   
                        <li><MdMenu onClick={() =>settoggle(!toggle)} className='text-5xl text-gray-400 md:hidden block'/></li>
                      } 
                      </ul>
                    </div>

                    <div className='hidden md:block'>
                    <Button name='Get my CV'/>
                    </div>

                    {/* responsive menu */}
                <ul className={`text-center text-4xl duration-500 md:hidden w-screen text-gray-800 font-bold fixed bg-slate-600 top-20 py-5 h-screen 
                    ${toggle ? 'left-0' : 'left-[-100%]'}
                    `}>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#home">Home</a></li>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#about">About</a></li>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#portfolio">Portfolio</a></li>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#education">Education</a></li>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#skills">Skills</a></li>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#experience">Experience</a></li>
                    <li className=' p-4'><a onClick={() =>settoggle(!toggle)} href="#contact">Contact</a></li>

                </ul>
                </nav>
                
    </div>
  )
}

export default Header