import bannerInternetHome from '../../../assets/img/banners/bannerInternetHome.webp'
import bannerCorporativo from '../../../assets/img/banners/bannerCorporativo.webp'
import bannerTv from '../../../assets/img/banners/bannerTv.webp'
import bannerDual from '../../../assets/img/banners/bannerDual.webp'





const Banner = ({ activeProduct }) => {

  const { home, business, tv, dual } = activeProduct

  return (
    <div className=' relative flex justify-center items-center '>

      {home && <img className='object-cover h-[330px] w-auto ' src={bannerInternetHome} alt="banner internet home" />}

      {business && <img className='object-cover h-[330px] w-full ' src={bannerCorporativo} alt="banner internet corporativo" />}

      {tv && <img className='object-cover h-[330px] w-full ' src={bannerTv} alt="banner tv" />}

      {dual && <img className='object-cover h-[330px] w-full ' src={bannerDual} alt="banner dual" />}


      <div className='absolute z-10 my-4 md:my-12 w-full flex flex-col items-end justify-around md:flex-row md:items-center md:justify-around h-4/6'>

        <div className=' text-white p-2'>
          <p className='text-2xl text-center lg:text-4xl font-extrabold'>Speedy Fibra</p>
          <p className='text-lg text-center lg:font-bold lg:py-2'>La fibra que todos quieren</p>
        </div>

        <a
          className='relative flex flex-col items-center rounded-xl mx-2 text-white backdrop-blur-sm md:backdrop-blur-0 bg-white/30 md:rounded-xl animate__animated animate-pulse animate__slower'
          href={`https://api.whatsapp.com/send/?phone=593994505050&text=Hola+me+interesa+en+plan+de+200+Mb&type=phone_number&app_absent=0`}
          target='_blank' rel="noreferrer"
        >

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

          <button className='absolute -bottom-4 bg-secondary w-2/3 rounded-xl text-center'>Contrata ahora  </button>
        </a>


      </div>






    </div>
  )
}

export default Banner