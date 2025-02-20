import React from 'react';
import TestiCard from './UI/TestiCard';



function Testimonial() {
  return (
    <section id='testimonial' className='py-24'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <h1 className='font-medium text-gray-700 text-3xl md:text-4xl mb-5'>Testimonial</h1>
        <p className='font-normal text-gray-700 text-xl mb-10 md:mb-20'>
          Below is a summary of the reviews.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {/* First TestiCard */}
          <TestiCard review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.' reviewer ='Rajesh' position ='Ceo at abc..'/>

          {/* Second TestiCard */}
          <TestiCard review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.' reviewer ='Rajesh' position ='Ceo at abc..'/>

          {/* Second TestiCard */}
          <TestiCard review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.' reviewer ='Rajesh' position ='Ceo at abc..'/>

        </div>
      </div>
    </section>
  );
}

export default Testimonial;