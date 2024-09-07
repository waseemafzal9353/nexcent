import React from 'react'

const Card = (props) => {
    const {title, description, icon} = props.data;
  return (
    <div className='flex flex-col items-center justify-center p-4 w-72
     rounded-md text-center mb-5 shadow-md'>
        <img src={icon} alt='icon' className='w-20 mb-1'/>
        <h2 className='text-4xl text-neutral-600 mb-1'>{title}</h2>
        <p className='text-neutral-600 text-center mb-5 text-md'>{description}</p>
    </div>
  )
}

export default Card