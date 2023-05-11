import CardTvPlans from './CardTvPlans'

import imgBannerTv from '../../../assets/img/banners/bannerTv.webp'
import iconTv from '../../../assets/icons/svgTv.svg'
import TableComparation from './TableComparation'
import TableChannels from './TableChannels'


const TvPlans = () => {
  return (

    <div className='w-full flex flex-col items-center mb-20'>

      <img className='object-cover h-auto w-auto ' src={imgBannerTv} alt="" />

      <div className='flex items-center   py-4 px-8 w-full lg:w-8/12 '>
        <img className='mr-4' src={iconTv} alt="" />
        <p className='text-xl font-bold'>Nuestros planes de TV</p>
      </div>


      <div className='flex justify-center flex-wrap overfl md:flex-row md:justify-between px-8 lg:px-0 lg:w-8/12 '>
        <CardTvPlans />
        <CardTvPlans />
        <CardTvPlans />
      </div>

      <div className='flex flex-col px-8 py-4 lg:w-8/12 '>
        <p className='text-xl lg:text-3xl text-center font-bold my-2'>Comparador de planes</p>
        <p className='text-lg text-justify'>Para comparar los planes que necesites, selecciona en cada casilla el nombre del plan del cual quieras información</p>
      </div>

      <TableComparation />

      <TableChannels />

    </div>
  )

}

export default TvPlans
