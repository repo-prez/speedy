import React from 'react'
import svgLocation from '../../../assets/icons/svgLocation.svg'

const CardDirection = ({ ciudad, oficina, direccion }) => {
  return (
    <div className='flex my-4 md:w-1/2 lg:w-1/3 '>

      <img className='border-r-2 border-secondary px-4 mx-4' src={svgLocation} width={70} alt="icon location" />
      <div>
        <p className='font-bold'>{ciudad}</p>
        <p>{oficina}</p>
        <p>{direccion}</p>
      </div>
    </div>
  )
}

export default CardDirection