
import React from 'react';
import { FiCoffee, FiCodesandbox, FiActivity } from "react-icons/fi";


function Portfolio() {
  return (
    <section id='portfolio' className='py-24'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <h1 className='font-medium text-gray-700 text-3xl md:text-4xl mb-5'>Portfolio</h1>
        <p className='font-normal text-gray-700 text-xl mb-20'>
          Below is a summary of the places I studied
        </p>

        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-gray-50 px-8 py-10 rounded-md shadow-lg hover:shadow-gray-500 transition ease-out duration-500'>
                    <div className='w-20 py-6 flex justify-center text-2xl bg-gray-100 rounded-md mb-4 hover:bg-gray-300 transition ease-out duration-500'>
                      <FiActivity />
                    </div>
                    <h4 className='font-medium text-gray-700 text-lg mb-4'>High experience</h4>
                    <p className='font-normal text-gray-500 text-md'>
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className='bg-gray-50 px-8 py-10 rounded-md'>
                    <div className='w-20 py-6 flex justify-center text-2xl bg-gray-100 rounded-md mb-4'>
                      <FiCodesandbox />
                    </div>
                    <h4 className='font-medium text-gray-700 text-lg mb-4'>Useful sandboxes</h4>
                    <p className='font-normal text-gray-500 text-md'>
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className='bg-gray-50 px-8 py-10 rounded-md'>
                    <div className='w-20 py-6 flex justify-center text-2xl bg-gray-100 rounded-md mb-4'>
                    <FiCoffee />
                    </div>
                    <h4 className='font-medium text-gray-700 text-lg mb-4'>Success side projects</h4>
                    <p className='font-normal text-gray-500 text-md'>
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>



        </div>
      </div>
    </section>
  );
}

export default Portfolio;