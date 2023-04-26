import bannerInternetHome from '../../../assets/img/banners/bannerInternetHome.png'
import bannerCorporativo from '../../../assets/img/banners/bannerCorporativo.png'
import bannerTv from '../../../assets/img/banners/bannerTv.png'
import bannerDual from '../../../assets/img/banners/bannerDual.png'
import { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react'


const Banner = ({ activeProduct }) => {

  const { home, business, tv, dual } = activeProduct


  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate()


  }, [home, business, tv, dual])



  return (
    <div className=' relative flex '>

      <img className='object-cover h-56 w-full' src={home ? bannerInternetHome : business ? bannerCorporativo : tv ? bannerTv : bannerDual} alt="" />

      <div className='absolute z-10 my-4 md:my-12 w-full flex flex-col items-start md:flex-row md:items-center md:justify-around '>

        <div className=' text-white p-2'>
          <p className='text-xl font-bold'>Speedy Fibra</p>
          <p className='text-sm'>La fibra que todos quieren</p>
        </div>

        <div className=' text-white  p-2 md:backdrop-blur-sm md:bg-white/20 md:rounded-xl'>
          <p className='text-xl font-bold'>200 Megas</p>
          <p className='text-xl font-bold'>$22/50/mes</p>
          <p className='text-sm'>Contrátalo ahora</p>
          <button
            className='bg-pink-600 px-2 py-1 rounded-md mt-2 hover:bg-pink-700'
          >
            Revisa tu Factibilidad
          </button>
        </div>
      </div>



    </div>
  )
}

export default Banner