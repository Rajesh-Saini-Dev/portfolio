import React from 'react'
import Hero from '../assets/image/heroimg.jpg'
import Button from './UI/Button'



function Home() {
  return (
    <div id='home' className='pt-28'>
        <div className='text-center'>
                    <div className='flex justify-center mb-10 md:mb-6'>
                        <img src={Hero} alt="Image" className='h-72 w-72 rounded-full shadow-xl border-[3px] border-gray-400 hover:shadow-2xl hover:shadow-gray-700 transition ease-out duration-500 hover:scale-105'/>
                    </div>

                    <h6 className='font-bold text-gray-600 text-4xl uppercase mb-6 md:mb-4'>Rajesh</h6>

                    <h1 className='font-normal text-gray-900 text-5xl md:text-7xl leading-none mb-4'>Frontend Developer</h1>

                    <p className='font-normal text-gray-600 text-xl mb-12'>I have a passion for software. I enjoy creating tools that make life easier for people.</p>

                    <Button name ='Hire me'/>
                </div>
    </div>
  )
}

export default Home