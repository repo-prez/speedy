import bannerHero from '../../../assets/img/banners/bannerHero.png'
const Banner = () => {
  return (
    <div className=' relative flex '>

      <img className='object-cover h-56 w-full' src={bannerHero} alt="" />

      <div className='absolute z-10 my-4 w-full flex flex-col items-start md:flex-row md:items-center md:justify-around '>

        <div className=' text-white p-2'>
          <p className='text-xl font-bold'>Speedy Fibra</p>
          <p className='text-sm'>La fibra que todos quieren</p>
        </div>

        <div className=' text-white p-2'>
          <p className='text-xl font-bold'>200 Megas</p>
          <p className='text-xl font-bold'>$22/50/mes</p>
          <p className='text-sm'>Contrátalo ahora</p>
          <button
            className='bg-pink-600 px-2 py-1 rounded-sm mt-2 hover:bg-pink-700'
          >
            Revisa tu cobertura
          </button>
        </div>
      </div>



    </div>
  )
}

export default Banner