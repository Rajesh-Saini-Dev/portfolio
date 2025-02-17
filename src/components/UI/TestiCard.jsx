import React from 'react'

function TestiCard(props) {
  return (
    <>
        <div className='bg-gray-50 px-8 py-10 rounded-md shadow-lg hover:shadow-gray-500 transition ease-out duration-500'>
            <p className='font-normal text-gray-500 text-md mb-4'>
              {props.review}
            </p>
            <h6 className='font-semibold text-gray-500 text-md'>
              {props.reviewer} <span className='font-medium text-gray-400 text-sm'>- {props.position}</span>
            </h6>
          </div>
    </>
  )
}

export default TestiCard