import { useContext } from 'react'

import underConstruction from '../../assets/img/media/underConstruction.webp'

import Footer from '../../ui/components/Footer'
import NavBar from '../../ui/components/NavBar'

import { AppContext } from '../../context/AppContext'

const UnderConstruction = () => {
  const { filterHome } = useContext(AppContext)
  return (
    <div>
      <NavBar />
      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`} />}

      <div className='flex justify-center'>

        <div className='flex flex-col lg:flex-row-reverse lg:items-center  lg:w-10/12 xl:w-8/12'>
          <img className='my-8 animate-pulse px-8 lg:w-2/3' src={underConstruction} alt="Image Designed by Freepik" />

          <div className='flex-col justify-center items-center w-full lg:w-1/3 py-10 '>
            <h1 className={`text-4xl lg:text-6xl lg:py-8 font-extrabold text-center `}>Speedy TV</h1>
            <p className={`text-xl text-center`}>Estamos trabajando en algo nuevo para ti, Speedy TV es el nuevo servicio que va a revolucionar el entretenimiento en tu hogar</p>
            <p className='text-xl text-center py-8'>Espéralo</p>
          </div>
        </div>

      </div>


      <Footer />
    </div>
  )
}

export default UnderConstruction