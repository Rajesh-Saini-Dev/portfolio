import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className='bg-gray-800 py-10'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
          <div>
            <h4 className='text-white text-xl font-semibold mb-4'>Quick Links</h4>
            <ul className='text-gray-300 text-lg font-semibold'>
              <li className='mb-2'><a href="#home" className='hover:text-gray-600'>Home</a></li>
              <li className='mb-2'><a href="#about" className=
              'hover:text-gray-600'>About</a></li>
              <li className='mb-2'><a href="#projects" className='hover:text-gray-600'>Projects</a></li>
              <li className='mb-2'><a href="#education" className='hover:text-gray-600'>Education</a></li>
              <li className='mb-2'><a href="#experience" 
              className='hover:text-gray-600'>Experience</a></li>
              <li className='mb-2'><a href="#skills" className='hover:text-gray-600'>Skills</a></li>
              <li className='mb-2'><a href="#testimonial" className='hover:text-gray-600'>Testimonial</a></li>
              <li className='mb-2'><a href="#contact" 
              className='hover:text-gray-600'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-white text-xl mb-4'>Social Media</h4>
            <ul className=' text-gray-300 text-lg font-semibold'>
              <li className='mb-2'><a href="https://facebook.com" className='hover:text-gray-600'><FaFacebookSquare />Facebook</a></li>
              <li className='mb-2'><a href="https://instagram.com" className='hover:text-gray-600'><FaInstagramSquare />Instagram</a></li>
              <li className='mb-2'><a href="https://github.com" className='hover:text-gray-600'><FaGithubSquare />GitHub</a></li>
              <li className='mb-2'><a href="https://linkedin.com" className='hover:text-gray-600'><FaLinkedin />LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-white text-xl mb-4'>Contact</h4>
            <p className='text-gray-300 text-lg font-semibold'>Email: rajeshsini965416@gmailcom.com</p>
            <p className='text-gray-300 text-lg font-semibold'>Phone: +91- 704 234 7183</p>
          </div>
        </div>
        <div className='bg-black w-full text-center text-gray-300 text-lg font-semibold mt-10'>
          &copy; 2025 Rajesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;