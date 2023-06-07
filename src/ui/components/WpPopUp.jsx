import React from 'react'
import wpLogo from '../../assets/icons/whatsapp.svg'

import svgWhatsapp from '../../assets/icons/svgWhatsapp.svg'
import { Link } from 'react-router-dom'


const WpPopUp = () => {
  return (
    <Link
      to='https://api.whatsapp.com/send?phone=593999051864'
      className='fixed bottom-20 right-0 bg-secondary w-[70px] h-[100px] flex flex-col justify-center items-center rounded-l-xl'
    >
      <img className='w-[40px] animate-pulse' src={svgWhatsapp} alt='icon' />
      <p className='w-full text-center text-white leading-4'>Contrata ahora</p>
    </Link>
  )
}

export default WpPopUp