import React from 'react';
import EduCard from './UI/EduCard';

function Education() {
  return (
    <section id='education' className='py-24'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <h1 className='font-medium text-gray-700 text-3xl md:text-4xl mb-5'>Education</h1>
        <p className='font-normal text-gray-700 text-xl  mb-20'>
          Below is a summary of the places I studied
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {/* first card */}
          <EduCard date ='2018-2019' summary ="I graduated from CCS Univercity with my Bachelor of Computer Application in 2019. and it's helped build a strong professional discipline, allowing me to continue to develop in-demand skills while working for the fastest-growing tech companies."/>


          {/* Second card */}
          <EduCard date ='2013-2014' summary ='I have completed my Intermediate from Shambhu Dayal inter college, from(UP Board) in 2014'/>

          {/* Third card */}
          <EduCard date ='2011-2012' summary ='I have completed my High School from Shambhu Dayal inter college, from(UP Board) in 2012'/>

        </div>
      </div>
    </section>
  );
}

export default Education;