import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`rounded-xl font-[poppins] font-medium text-[18px] text-black outline-none py-4 px-6 bg-blue-gradient ${styles}`}>
      Get Started
    </button>
  )
}

export default Button