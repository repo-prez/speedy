import CardTvPlans from './CardTvPlans'

import imgBannerTv from '../../../assets/img/banners/bannerTv.webp'
import iconTv from '../../../assets/icons/svgTv.svg'
import TableComparation from './TableComparation'
import TableChannels from './TableChannels'


const TvPlans = () => {
  return (

    <div className='w-full flex flex-col items-center mb-20 '>

      <img className='object-cover h-[300px] w-auto  ' src={imgBannerTv} alt="Banner speedy tv" />

      <div className='flex items-center   py-6 w-5/6 lg:w-8/12 xxl:w-f'>
        <img className='mr-4' src={iconTv} alt="icon" />
        <p className='text-xl font-bold'>Nuestros planes de TV</p>
      </div>


      <div className={`flex rounded-xl lg:justify-between  overflow-x-scroll no-scrollbar w-5/6    lg:w-10/12 xxl:w-8/12   lg:pl-0 `}>

        <CardTvPlans />
        <CardTvPlans />
        <CardTvPlans />
      </div>

      <div className='flex flex-col  py-4 w-5/6 lg:w-8/12 '>
        <p className='text-2xl lg:text-3xl text-center font-bold my-2'>Comparador de planes</p>
        <p className='text-lg text-justify'>Para comparar los planes que necesites, selecciona en cada casilla el nombre del plan del cual quieras información</p>
      </div>

      <div className='w-5/6 lg:w-8/12 flex flex-col items-center'>


        <TableComparation />

        <TableChannels />
      </div>

    </div>
  )

}

export default TvPlans
