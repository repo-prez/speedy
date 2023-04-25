import svgInternetHome from '../../../assets/icons/svgInternetHome.svg'
import svgInternetCorporativo from '../../../assets/icons/svgInternetCorporativo.svg'
import svgSpeedy from '../../../assets/icons/svgSpeedy.svg'
import svgsvgDualPack from '../../../assets/icons/svgDualPack.svg'


const Plans = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="flex flex-row flex-wrap justify-center items-center p-1 w-11/12 ">

        <button
          className="flex items-center justify-center p-4 bg-slate-50  border-slate-500
        w-1/2 border-2 border-r-0 rounded-l-2xl 
        md:w-1/3
        lg:w-1/4"
        >
          <img src={svgInternetHome} width={50} alt="" />
          <p>Internet Hogar</p>
        </button>


        <button
          className="flex items-center justify-center p-4 bg-slate-50  border-slate-500
        w-1/2 border-2 rounded-r-2xl 
        md:w-1/3 md:rounded-none
        lg:w-1/4"
        >
          <img src={svgInternetCorporativo} width={50} alt="" />
          <p>Internet Corporativo </p>
        </button>


        <button
          className="flex items-center justify-center  p-4 bg-slate-50  border-slate-500
        w-1/2 border-2 border-r-0 border-t-0 rounded-l-2xl 
        md:w-1/3 md:border-t-2 md:border-r-2 md:rounded-l-none md:border-l-0 md:rounded-r-2xl
        lg:w-1/4 lg:rounded-r-none lg:border-r-0"
        >
          <img src={svgSpeedy} width={50} alt="" />
          <p>Speedy TV</p>
        </button>


        <button
          className="flex items-center justify-center  p-4 bg-slate-50  border-slate-500
        w-1/2 border-2  border-t-0 rounded-r-2xl 
        md:w-1/3 md:rounded-r-none md:rounded-br-2xl md:rounded-bl-2xl
        lg:w-1/4 lg:border-t-2 lg:rounded-l-none lg:rounded-r-2xl"
        >
          <img src={svgsvgDualPack} width={50} alt="" />
          <p>Dual Pack</p>
        </button>

      </div>

      <div className='flex flex-col items-center p-8'>
        <p className='text-2xl md:text-3xl font-bold text-blue-950'>Internet Hogar Fibra Óptica</p>
        <p className='text-center md:text-xl p-4'>Mejor experiencia de internet con más velocidad y estabilidad</p>
      </div>




    </div>

  )
}

export default Plans