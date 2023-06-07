import imgBannerCorporativo from '../../../assets/img/banners/bannerCorporativo.webp'
import svgSupport from '../../../assets/icons/svgSupport.svg'
import iconWiffi from '../../../assets/icons/iconWiffi.svg'

const Support = () => {
  return (
    <div className='w-full flex flex-col items-center mb-10 '>

      <img className='object-cover h-[300px] w-auto  ' src={imgBannerCorporativo} alt="Banner internet corporativo" />

      <div className='flex items-center   py-6 w-5/6 lg:w-8/12 xxl:w-f'>
        <img className='mr-4' src={svgSupport} alt="icons" />
        <p className='text-xl font-bold'>Soporte</p>
      </div>

      <div className='flex flex-wrap justify-center md:justify-between w-5/6 xxl:w-8/12'>

        <div className='w-full  md:w-[18rem] lg:w-[24rem] xxl:w-[26rem]  flex items-center bg-white hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300 py-4 px-2 my-3 md:my-6 rounded-2xl cursor-pointer '>
          <img className='w-1/12 md:w-[3rem] ' src={iconWiffi} alt="icons" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-full  md:w-[18rem] lg:w-[24rem] xxl:w-[26rem] flex items-center bg-white hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300 py-4 px-2 my-3 md:my-6 rounded-2xl cursor-pointer '>
          <img className='w-1/12 md:w-[3rem] ' src={iconWiffi} alt="icons" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-full  md:w-[18rem] lg:w-[24rem] xxl:w-[26rem] flex items-center bg-white hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300 py-4 px-2 my-3 md:my-6 rounded-2xl cursor-pointer '>
          <img className='w-1/12 md:w-[3rem] ' src={iconWiffi} alt="icons" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-full  md:w-[18rem] lg:w-[24rem] xxl:w-[26rem] flex items-center bg-white hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300 py-4 px-2 my-3 md:my-6 rounded-2xl cursor-pointer '>
          <img className='w-1/12 md:w-[3rem] ' src={iconWiffi} alt="icons" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-full  md:w-[18rem] lg:w-[24rem] xxl:w-[26rem] flex items-center bg-white hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300 py-4 px-2 my-3 md:my-6 rounded-2xl cursor-pointer '>
          <img className='w-1/12 md:w-[3rem] ' src={iconWiffi} alt="icons" />
          <div className='mx-2'>
            <p className='font-bold'>Canales de Atención</p>
            <p className=''>Infromate sobre nuestros canales de soporte</p>
          </div>
        </div>

        <div className='w-full  md:w-[18rem] lg:w-[24rem] xxl:w-[26rem] flex items-center bg-white hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300 py-4 px-2 my-3 md:my-6 rounded-2xl cursor-pointer '>
          <img className='w-1/12 md:w-[3rem] ' src={iconWiffi} alt="icons" />
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