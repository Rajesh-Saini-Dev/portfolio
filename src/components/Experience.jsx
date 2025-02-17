import React from 'react';

function Experience() {
  return (
    <section id='experience' className='py-24'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <h1 className='font-medium text-gray-700 text-3xl md:text-4xl mb-5'>Experience</h1>
        <p className='font-normal text-gray-700 text-xl mb-10 md:mb-20'>
          Below is a summary of the places I studied
        </p>
        <div className='flex flex-row justify-between'>
          <div className='space-y-8 md:space-y-16 mb-16 md:mb-0'>
            <h6 className='font-medium text-gray-600 text-lg uppercase'>Company</h6>
            <p className='font-semibold text-gray-800 text-base'>
              IK Communication <span className='font-normal text-gray-500'>/ Noida</span>
            </p>
          </div>
          <div className='space-y-8 md:space-y-16 mb-16 md:mb-0'>
            <h6 className='font-medium text-gray-600 text-lg uppercase'>Position</h6>
            <p className='font-normal text-gray-600 text-base'>Sales Executive</p>
          </div>
          <div className='space-y-8 md:space-y-16'>
            <h6 className='font-medium text-gray-600 text-lg uppercase'>Year</h6>
            <p className='font-normal text-gray-600 text-base'>2019-2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;