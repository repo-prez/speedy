import React from 'react'
import wpLogo from '../../assets/icons/whatsapp.svg'


const WpPopUp = () => {
  return (
    <div className="bg-blue-900 h-20 w-20 rounded-l-full fixed bottom-20 right-0 z-50 lg:hover:w-44 lg:hover:animate-pulse lg:hover:duration-700">
      <a href="https://api.whatsapp.com/send?phone=593999051864" target="_blank" className="block text-center" rel="noreferrer">
        <div className='lg:flex'>
          <img className='lg:w-[45px] lg:ml-6 lg:pt-3 p-4 lg:p-0' src={wpLogo}></img>
          <strong className='text-white lg:ml-3 lg:pt-3 hidden lg:block'>Quieres contratar?</strong>
        </div>
      </a>
    </div>
  )
}

export default WpPopUp