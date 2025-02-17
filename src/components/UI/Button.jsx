import React from 'react'

function Button(props) {
  return (
    <>
        <button >
              <a href="#" className='px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500 border border-gray-500'>{props.name}</a>
              
        </button>
    </>
  )
}

export default Button