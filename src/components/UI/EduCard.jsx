import React from 'react'

function EduCard(props) {
  return (
    <>
      <div className='bg-gray-50 px-8 py-10 rounded-md shadow-lg hover:shadow-gray-500 transition ease-out duration-500'>
            <h4 className='font-medium text-gray-700 text-lg mb-4'>{props.date}</h4>
            <p className='font-normal text-gray-500 text-md mb-4'>
              {props.summary}
            </p>
            <div className='relative'>
              <h6 className='font-semibold text-gray-500 text-md relative z-10  hover:text-gray-700 '>See the place here-</h6>
              <span className='w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0'></span>
            </div>
          </div>
    </>
  )
}

export default EduCard