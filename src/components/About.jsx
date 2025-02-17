import React from 'react';
import Button from './UI/Button'
import Hero from '../assets/image/heroimg.jpg'
import {FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";



function About() {
  return (
    <>
      <section id='about' className='py-24'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <h1 className='font-medium text-gray-700 text-3xl md:text-4xl mb-5'>About</h1>
        <p className='font-normal text-gray-700 text-xl  mb-10 md:mb-20'>
          Below is a summary of the places I studied
        </p>
        <div className='flex flex-col-reverse lg:flex-row gap-6'>
        <div className=" flex flex-col lg:w-1/2">
        <p className="mt-3 text-gray-600 text-xl">
         "I'm a passionate Frontend Developer skilled in React, Vite, and Tailwind CSS. I enjoy building fast, responsive, and user-friendly web applications with modern UI/UX principles. My focus is on writing clean, maintainable code and creating seamless digital experiences. Always eager to learn and improve, I'm excited to contribute to innovative projects and grow as a developer."
         </p>

              {/* Social Icons */}
           <div className='flex justify-center space-x-4 mt-8'>
                <a href="https://instagram.com/in/yourprofile" target="_blank" rel="" className='h-10 w-10 flex justify-center text-gray-400 hover:text-gray-600 border-2 border-gray-400 hover:border-gray-600 rounded-full items-center'>
                <i className="text-2xl "><FaInstagramSquare /></i>
                </a>

                <a href="https://github.com/yourprofile" target="_blank" rel="" className='h-10 w-10 flex justify-center text-gray-400 hover:text-gray-600 border-2 border-gray-400 hover:border-gray-600 rounded-full items-center'>
                <i className="text-2xl "><FaGithubSquare /></i>
                </a>

                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="" className='h-10 w-10 flex justify-center text-gray-400 hover:text-gray-600 border-2 border-gray-400 hover:border-gray-600 rounded-full items-center'>
                <i className="text-2xl "><FaLinkedin /></i>
                </a>
           </div>

         
         {/* Buttons */}
         <div className="flex justify-center pt-4 mt-8 space-x-16">
        
           <Button name='Hire me'/>
           <Button name='Get my CV'/>
         </div>
         </div>
       
            {/* Right Side - Image */}
       <div className='flex justify-center items-center lg:w-1/2'>
         <img
           src={Hero}
           alt="Profile"
           className='w-72 h-72 rounded-full shadow-2xl shadow-gray-800 hover:translate-y-4 ease-out border-2 border-black'
         />
         </div>
       </div>

        </div>
        </section>
    </>
  )
}

export default About