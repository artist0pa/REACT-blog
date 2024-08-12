import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='whit',
    className='',
    ...props
}) {
  return (
    <div>
        <button className={`px-4 py-2 ${type} ${bgColor}${textColor}${className}`}{...props}>
        {children}
    </button> 
    </div>
  )
}

export default Button