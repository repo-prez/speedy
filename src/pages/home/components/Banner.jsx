import bannerInternetHome from '../../../assets/img/banners/bannerInternetHome.webp'
import bannerCorporativo from '../../../assets/img/banners/bannerCorporativo.webp'
import bannerTv from '../../../assets/img/banners/bannerTv.webp'
import bannerDual from '../../../assets/img/banners/bannerDual.webp'

import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";




const Banner = ({ activeProduct }) => {

  const { home, business, tv, dual } = activeProduct



  return (
    <div className=' relative flex justify-center items-center '>


      <XyzTransition appear xyz="fade up big ">
        {home && <img className='object-cover h-[330px] w-auto ' src={bannerInternetHome} alt="banner internet home" />}
      </XyzTransition>

      <XyzTransition appear xyz="fade up big ">
        {business && <img className='object-cover h-[330px] w-full ' src={bannerCorporativo} alt="banner internet corporativo" />}
      </XyzTransition>

      <XyzTransition appear xyz="fade up big ">
        {tv && <img className='object-cover h-[330px] w-full ' src={bannerTv} alt="banner tv" />}
      </XyzTransition>

      <XyzTransition appear xyz="fade up big ">
        {dual && <img className='object-cover h-[330px] w-full ' src={bannerDual} alt="banner dual" />}
      </XyzTransition>




      <div className='absolute z-10 my-4 md:my-12 w-full flex flex-col items-end justify-around md:flex-row md:items-center md:justify-around h-4/6'>

        <div className=' text-white p-2'>
          <p className='text-2xl text-center lg:text-4xl font-extrabold'>Speedy Fibra</p>
          <p className='text-lg text-center lg:font-bold lg:py-2'>La fibra que todos quieren</p>
        </div>


        <div className='relative flex flex-col items-center rounded-xl mx-2 text-white backdrop-blur-sm md:backdrop-blur-0  bg-white/30 md:rounded-xl animate__animated animate-pulse animate__slower' >

          <div className='flex p-6'>

            <div className='flex flex-col justify-center items-center px-3 h-7'>
              <p>Plan</p>
              <p className='font-bold text-4xl flex justify-center items-center leading-3'>200 <span className='font-normal text-lg'>GB</span></p>
            </div>

            <div className='flex flex-col justify-center items-center px-3  h-7 border-l-2 border-secondary '>
              <p>Precio</p>
              <p className='font-bold text-4xl flex justify-center items-center leading-3'> <span className='font-normal text-lg'>$</span> 22 <span className='font-normal text-lg'>.50</span></p>
            </div>
          </div>

          <p className='absolute -bottom-4 bg-secondary w-2/3 rounded-xl text-center'>Contrata ahora</p>
        </div>


      </div>






    </div>
  )
}

export default Banner