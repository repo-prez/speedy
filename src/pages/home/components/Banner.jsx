import bannerInternetHome from '../../../assets/img/banners/bannerInternetHome.png'
import bannerCorporativo from '../../../assets/img/banners/bannerCorporativo.png'
import bannerTv from '../../../assets/img/banners/bannerTv.png'
import bannerDual from '../../../assets/img/banners/bannerDual.png'

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
        {business && <img className='object-cover h-[330px] w-full ' src={bannerInternetHome} alt="banner internet corporativo" />}
      </XyzTransition>

      <XyzTransition appear xyz="fade up big ">
        {tv && <img className='object-cover h-[330px] w-full ' src={bannerInternetHome} alt="banner tv" />}
      </XyzTransition>

      <XyzTransition appear xyz="fade up big ">
        {dual && <img className='object-cover h-[330px] w-full ' src={bannerInternetHome} alt="banner dual" />}
      </XyzTransition>




      <div className='absolute z-10 my-4 md:my-12 w-full flex flex-col items-start md:flex-row md:items-center md:justify-around '>

        <div className=' text-white p-2'>
          <p className='text-xl text-center lg:text-4xl font-bold'>Speedy Fibra</p>
          <p className='text-sm text-center lg:font-bold lg:py-2'>La fibra que todos quieren</p>
        </div>


        <div className=' text-white  p-2 md:backdrop-blur-sm md:bg-white/20 md:rounded-xl animate__animated animate-pulse animate__slower'>
          <p className='text-xl lg:text-3xl font-bold'>200 Megas</p>
          <p className='text-xl lg:text-4xl font-bold'>$22.50/mes</p>
          <p className='text-sm font-bold'>Contrátalo ahora</p>
          <button
            className='bg-secondary px-2 py-1 rounded-md mt-2 hover:bg-pink-700 font-bold'
          >
            Revisa tu cobertura
          </button>
        </div>


      </div>






    </div>
  )
}

export default Banner