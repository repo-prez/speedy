import bannerHelp from "../../../assets/img/banners/bannerHelp.png"
import bannerSpeedyTv from '../../../assets/img/banners/bannerSpeedyTv.png'


import bannerSpeedTest from '../../../assets/img/banners/bannerSpeedTest.png'
import bannerSupport from '../../../assets/img/banners/bannerSupport.png'


const Info = () => {
  return (
    <div className="p-4 lg:px-52">

      <div className="relative my-4 rounded-xl">
        <img className="object-cover object-right h-28 w-full rounded-xl" src={bannerSpeedyTv} alt="" />

        <div className="absolute top-1 sm:top-5 left-2 sm:left-20 text-white ">
          <p className="text-green-500 font-bold text-xl " >Speedy Tv</p>
          <p className="font-bold" >Nuestro nuevo servicio de TV</p>
          <p className="" >Mayor variedad para todos</p>
        </div>
      </div>



      <div className="md:flex">

        <div className="relative flex my-4 md:mr-2">
          <img className="rounded-xl" src={bannerSpeedTest} alt="" />

          <div className="absolute z-10 top-2 sm:top-10 md:top-5 right-2  items-center justify-center w-1/2  text-white text-right">
            <p className="text-md sm:text-2xl md:text-2xl font-bold ">Test de velocidad</p>
            <p className="text-xs sm:text-lg md:text-sm">Conoce que tan rápida es tu navegación a través de tu computadora o móvil.</p>
            <button
              className="text-xs sm:text-lg  bg-pink-600 hover:bg-pink-700 border-2 border-white px-2 py-1 my-1 rounded-full "
              onClick={() => window.open("https://www.speedtest.net/es", "_blank")}
            >
              Ir al Test de velocidad
            </button>
          </div>
        </div>

        <div className="relative my-4 md:ml-2">
          <img className="rounded-xl" src={bannerHelp} alt="" />

          <div className="absolute z-10 top-3 sm:top-10 md:top-5 left-3 w-2/3 text-white text-left">
            <p className="text-md sm:text-xl font-bold">¿Eres cliente de Speedy Hogar?</p>
            <p className="text-xs sm:text-lg">Aquí te guiaremos y resolveremos tus dudas
              para entregarte el mejor servicio.</p>
            <button
              className="bg-blue-700 hover:bg-pink-700 border-2 border-white  px-2 py-1 my-1 rounded-full "
              onClick={() => window.open("https://www.speedtest.net/es", "_blank")}
            >
              Ver opciones de ayuda
            </button>
          </div>
        </div>

      </div>



      <div className="relative my-4">
        <img className="object-cover object-left h-28 w-full rounded-xl" src={bannerSupport} alt="" />

        <div className="absolute top-1 sm:top-5 right-2  sm:right-20  text-right w-1/2">
          <p className="text-blue-800 font-bold text-xl " >Soporte</p>
          <p className="text-xs" >Nuestro equipo de soporte técnico está aquí para
            ayudarte a navegar en un mundo conectado.</p>
        </div>
      </div>






    </div>
  )
}

export default Info