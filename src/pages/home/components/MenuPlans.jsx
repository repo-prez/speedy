import svgInternetHome from '../../../assets/icons/svgInternetHome.svg'
import svgInternetCorporativo from '../../../assets/icons/svgInternetCorporativo.svg'
import svgSpeedy from '../../../assets/icons/svgSpeedy.svg'
import svgsvgDualPack from '../../../assets/icons/svgDualPack.svg'




const MenuPlans = ({ activeProduct, setActiveProduct }) => {

  const { home, business, tv, dual } = activeProduct




  return (
    <div className='flex flex-col items-center'>
      <div className="flex flex-row flex-wrap justify-center items-center p-1 w-11/12 ">

        <button
          className={`flex items-center justify-center p-4  border-slate-500  ${home ? 'bg-secondary' : 'bg-slate-50'}
          w-1/2 border-2 border-r-0 rounded-l-2xl 
          md:w-1/3
          lg:w-1/4`}
          onClick={() => setActiveProduct({ home: true, business: false, tv: false, dual: false })}
        >
          <img src={svgInternetHome} width={50} alt="icon internet home" />
          <p>Internet Hogar</p>
        </button>


        <button
          className={`flex items-center justify-center p-4  border-slate-500 ${business ? 'bg-secondary' : 'bg-slate-50'}
          w-1/2 border-2 rounded-r-2xl 
          md:w-1/3 md:rounded-none
          lg:w-1/4`}
          onClick={() => setActiveProduct({ home: false, business: true, tv: false, dual: false })}
        >
          <img src={svgInternetCorporativo} width={50} alt="ion internet corporativo" />
          <p>Internet Corporativo </p>
        </button>


        <button
          className={`flex items-center justify-center  p-4  border-slate-500 ${tv ? 'bg-secondary' : 'bg-slate-50'}
          w-1/2 border-2 border-r-0 border-t-0 rounded-l-2xl 
          md:w-1/3 md:border-t-2 md:border-r-2 md:rounded-l-none md:border-l-0 md:rounded-r-2xl
          lg:w-1/4 lg:rounded-r-none lg:border-r-0`}
          onClick={() => setActiveProduct({ home: false, business: false, tv: true, dual: false })}
        >
          <img src={svgSpeedy} width={50} alt="icon speedy tv" />
          <p>Speedy TV</p>
        </button>



        <button
          className={`flex items-center justify-center  p-4 border-slate-500 ${dual ? 'bg-secondary' : 'bg-slate-50'}
          w-1/2 border-2  border-t-0 rounded-r-2xl 
          md:w-1/3 md:rounded-r-none md:rounded-br-2xl md:rounded-bl-2xl
          lg:w-1/4 lg:border-t-2 lg:rounded-l-none lg:rounded-r-2xl`}
          onClick={() => setActiveProduct({ home: false, business: false, tv: false, dual: true })}
        >
          <img src={svgsvgDualPack} width={50} alt="icon speedy dual pack" />
          <p>Dual Pack</p>
        </button>

      </div>

      <div className={`flex flex-col items-center px-8 py-1 ${!home ? 'hidden' : 'flex'}`}>
        <p className='text-2xl md:text-3xl font-bold text-blue-950'>Internet Hogar Fibra Óptica</p>
        <p className='text-center md:text-xl px-4 py-0'>Mejor experiencia de internet con más velocidad y estabilidad</p>
      </div>

      <div className={`flex flex-col items-center px-8 py-1 ${!business ? 'hidden' : 'flex'}`}>
        <p className='text-2xl md:text-3xl font-bold text-blue-950'>Internet Corporativo Fibra Óptica</p>
        <p className='text-center md:text-xl px-4 py-0'>Mejor experiencia de internet con más velocidad y estabilidad</p>
      </div>

      <div className={`flex flex-col items-center px-8 py-1 ${!tv ? 'hidden' : 'flex'}`}>
        <p className='text-2xl md:text-3xl font-bold text-blue-950'>Speedy TV</p>
        <p className='text-center md:text-xl px-4 py-0'>Mejor experiencia de internet con más velocidad y estabilidad</p>
      </div>

      <div className={`flex flex-col items-center px-8 py-1 ${!dual ? 'hidden' : 'flex'}`}>
        <p className='text-2xl md:text-3xl font-bold text-blue-950'>Dual Pack</p>
        <p className='text-center md:text-xl px-4 py-0'>Mejor experiencia de internet con más velocidad y estabilidad</p>
      </div>


    </div>
  )
}

export default MenuPlans