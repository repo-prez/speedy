import React from 'react'
import iconWireless from '../../../assets/icons/iconWireless.svg'
import iconUser from '../../../assets/icons/iconUser.svg'
import iconWifi from '../../../assets/icons/iconWiffi.svg'
import bannerEcuador from '../../../assets/img/banners/bannerEcuador.webp'


const Map = () => {
  return (
    <div className='flex justify-center  px-8 lg:px-0 w-full'>


      <div className='flex  flex-col items-center lg:flex-row lg:w-10/12 xxl:w-8/12'>

        {/* Map */}
        <img className='md:w-2/3 lg:w-1/2' src={bannerEcuador} alt="cobertura ecuador" />

        {/* Data */}
        <div className=''>
          <div className='flex flex-col  my-4'>
            <div className='flex  my-2 '>
              <img src={iconWireless} width={30} alt="iconWireLess" />
              <p className='mx-2 text-lg font-bold '>Explora un mundo de posibilidades con nuestra cobertura de internet</p>
            </div>
            <p className=' text-justify'>Nuestra cobertura de internet llega a todos los rincones, conectando a personas de todo el mundo y brindando acceso confiable a información, servicios y oportunidades en línea. ¡Descubre un mundo de posibilidades con nuestro Speedy internet!</p>
          </div>


          <div className='flex flex-col my-4'>
            <div className='flex my-2 '>
              <img src={iconUser} width={35} alt="iconWireLess" />
              <p className='mx-2 text-lg font-bold '>Llevando nuestra cobertura de internet a cada rincón</p>
            </div>
            <p className=' text-justify'>Enfocados en cerrar la brecha digital, llevamos nuestra cobertura de internet a regiones y comunidades que han sido marginadas, ofreciendo una conexión confiable y asequible. Únete a nosotros y sé parte del cambio hacia una sociedad digitalmente inclusiva.</p>
          </div>


          <div className='flex flex-col my-4 '>
            <div className='flex my-2 '>
              <img src={iconWifi} width={35} alt="iconWireLess" />
              <p className='mx-2 text-lg font-bold '>Ampliando la cobertura de internet para un futuro digital equitativo</p>
            </div>
            <p className=' text-justify'>Con nuestro servicio de internet, estamos transformando vidas al ampliar la cobertura en áreas rurales, urbanas desfavorecidas. Nuestra misión es asegurar que nadie se quede atrás en la era digital. ¡Descubre la potencia de la conectividad con Speedy internet!</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Map