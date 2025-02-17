import React from 'react';
import Button from './UI/Button';

function ContactForm() {
  return (
    <section id='contact' className='py-24'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <h1 className='font-medium text-gray-700 text-3xl md:text-4xl mb-5'>Contact</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <form className='bg-gray-300 px-8 py-10 border border-gray-400 rounded-md shadow-lg shadow-gray-500'>
            <div className='mb-4'>
              <label className='block text-gray-500 text-md mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='w-full px-3 py-2 text-gray-700 border border-gray-500 rounded-md focus:outline-none'
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-500 text-md mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='w-full px-3 py-2 text-gray-700 border border-gray-500 rounded-md focus:outline-none'
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-500 text-md mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='w-full px-3 py-2 text-gray-700 border border-gray-500 rounded-md focus:outline-none'
                id='message'
                name='message'
                rows='5'
                placeholder='Your Message'
              ></textarea>
            </div>
            
            <Button name ='Send'/>
          </form>
          <div className='bg-gray-300 px-8 py-10 border border-gray-400 rounded-md shadow-lg shadow-gray-500'>
            <iframe
              className='w-full h-full border border-gray-400 rounded-md'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9c7b0b1b!2sVictoria%20Harbour%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1613974322000!5m2!1sen!2sus'
              allowFullScreen=''
              loading='lazy'
              title='Google Maps'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;