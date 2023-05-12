import imgBannerCorporativo from '../../../assets/img/banners/bannerCorporativo.webp'
import svgSupport from '../../../assets/icons/svgSupport.svg'
import iconWiffi from '../../../assets/icons/iconWiffi.svg'

const Support = () => {
  return (
    <div className='w-full flex flex-col items-center mb-20'>

      <img className='object-cover h-[300px] w-auto  ' src={imgBannerCorporativo} alt="" />

      <div className='flex items-center   py-6 w-5/6 lg:w-8/12 xl:w-f'>
        <img className='mr-4' src={svgSupport} alt="" />
        <p className='text-xl font-bold'>Soporte</p>
      </div>

      <div className='flex flex-wrap justify-between w-5/6'>

        <div className='w-[18rem] lg:w-[24rem] xl:w-[28rem]  flex items-center bg-white hover:shadow-[2px_5px_20px_1px_rgba(0,0,0,0.56)] py-4 px-2 my-10 rounded-2xl hover:shadow-secondary'>
          <img className='w-1/12 md:w-2/12 ' src={iconWiffi} alt="" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-[18rem] lg:w-[24rem] xl:w-[28rem] flex items-center bg-white hover:shadow-[2px_5px_20px_1px_rgba(0,0,0,0.56)] py-4 px-2 my-10 rounded-2xl hover:shadow-secondary'>
          <img className='w-1/12 md:w-2/12 ' src={iconWiffi} alt="" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-[18rem] lg:w-[24rem] xl:w-[28rem] flex items-center bg-white hover:shadow-[2px_5px_20px_1px_rgba(0,0,0,0.56)] py-4 px-2 my-10 rounded-2xl hover:shadow-secondary'>
          <img className='w-1/12 md:w-2/12 ' src={iconWiffi} alt="" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-[18rem] lg:w-[24rem] xl:w-[28rem] flex items-center bg-white hover:shadow-[2px_5px_20px_1px_rgba(0,0,0,0.56)] py-4 px-2 my-10 rounded-2xl hover:shadow-secondary'>
          <img className='w-1/12 md:w-2/12 ' src={iconWiffi} alt="" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-[18rem] lg:w-[24rem] xl:w-[28rem] flex items-center bg-white hover:shadow-[2px_5px_20px_1px_rgba(0,0,0,0.56)] py-4 px-2 my-10 rounded-2xl hover:shadow-secondary'>
          <img className='w-1/12 md:w-2/12 ' src={iconWiffi} alt="" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-[18rem] lg:w-[24rem] xl:w-[28rem] flex items-center bg-white hover:shadow-[2px_5px_20px_1px_rgba(0,0,0,0.56)] py-4 px-2 my-10 rounded-2xl hover:shadow-secondary'>
          <img className='w-1/12 md:w-2/12 ' src={iconWiffi} alt="" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>




      </div>


    </div>
  )
}

export default Support