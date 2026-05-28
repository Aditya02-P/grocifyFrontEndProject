import React from 'react'

const Button = ({text}) => {
  return (
        <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            {text}
        </button>
    
  )
}

export default Button