import React from 'react'
import iconWireless from '../../../assets/icons/iconWireless.svg'
import iconUser from '../../../assets/icons/iconUser.svg'
import iconWifi from '../../../assets/icons/iconWiffi.svg'
import bannerEcuador from '../../../assets/img/banners/bannerEcuador.png'


const Map = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center  px-8 lg:px-32 '>


      {/* Data */}
      <div>
        <div className='flex flex-col  my-4'>
          <div className='flex  my-2 mx-5'>
            <img src={iconWireless} width={30} alt="iconWireLess" />
            <p className='mx-2 text-lg font-bold '>¿Qué es Internet Hogar Fibra WiFi Total?</p>
          </div>
          <p className='mx-5 text-justify'>Internet WiFi Total es la nueva experiencia que Speedy y su servicio de Fibra Óptica tiene para ti. Entregamos velocidad y una mejor experiencia de internet para tu hogar.</p>
        </div>


        <div className='flex flex-col my-4'>
          <div className='flex my-2 mx-5'>
            <img src={iconUser} width={35} alt="iconWireLess" />
            <p className='mx-2 text-lg font-bold '>¿En qué consiste la experiencia de Internet Hogar Fibra WiFi Total?</p>
          </div>
          <p className='mx-5 text-justify'>Nuestro internet hogar llega a ti a través de la tecnología Fibra Óptica. Esto asegura calidad y una mejor experiencia de conectividad con nuestros equipos, Router principal y/o Extensores WiFi.</p>
        </div>


        <div className='flex flex-col my-4 '>
          <div className='flex my-2 mx-5'>
            <img src={iconWifi} width={35} alt="iconWireLess" />
            <p className='mx-2 text-lg font-bold '>¿Qué es Router Principal?</p>
          </div>
          <p className='mx-5 text-justify'>El router principal es el equipo que permite emitir una señal WiFi. Cuenta con una tecnología Dual Band (2.4 GHz y 5 GHz) que te permitirá alcanzar altas velocidades y te brindará una gran experiencia de internet para tu hogar.</p>
        </div>
      </div>


      {/* Map */}
      <img className='md:w-2/3 lg:w-1/2' src={bannerEcuador} alt="cobertura ecuador" />


    </div>
  )
}

export default Map