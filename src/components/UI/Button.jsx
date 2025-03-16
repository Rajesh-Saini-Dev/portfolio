import React from 'react'
import resume from "../../assets/resume.pdf"

function Button(props) {

  // const result =props.name
  // const name =  result.split(" ").reverse()[0]
 
  return (
    <>
    
              <a type='button' href={resume} download={"rajesh"} className='px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500 border border-gray-500'>{props.name}</a>
              
      
    </>
  )
}

export default Button