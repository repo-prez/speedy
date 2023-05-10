import CardTvPlans from './CardTvPlans'

import imgBannerTv from '../../../assets/img/banners/bannerTv.webp'
import iconTv from '../../../assets/icons/svgTv.svg'
import TableComparation from './TableComparation'
import TableChannels from './TableChannels'


const TvPlans = () => {
  return (

    <div className=''>

      <img className='object-cover h-[330px] w-auto ' src={imgBannerTv} alt="" />

      <div className='flex items-center py-4 px-8'>
        <img className='mr-4' src={iconTv} alt="" />
        <p className='text-xl font-bold'>Nuestros planes de TV</p>
      </div>

      <div className='flex justify-center flex-wrap'>

        <CardTvPlans />
        <CardTvPlans />
      </div>

      <div className='flex flex-col px-8 py-4 '>
        <p className='text-xl text-center font-bold my-2'>Comparador de planes</p>
        <p className='text-lg text-justify'>Para comparar los planes que necesites, selecciona en cada casilla el nombre del plan del cual quieras información</p>
      </div>

      <TableComparation />
      <TableChannels />

    </div>
  )

}

export default TvPlans
