import bannerHelp from "../../../assets/img/banners/bannerHelp.png"
import bannerSpeedyTv from '../../../assets/img/banners/bannerSpeedyTv.png'


import bannerSpeedTest from '../../../assets/img/banners/bannerSpeedTest.png'
import bannerSupport from '../../../assets/img/banners/bannerSupport.png'


const Info = () => {
  return (
    <div className="p-9 lg:px-24">

      <div className="relative flex justify-start items-center my-4 rounded-xl ">
        <img className="object-cover object-right h-32 w-full rounded-xl" src={bannerSpeedyTv} alt="banner tv" />

        <div className="absolute z-10 w-9/12 mx-4 text-white text-left">
          <p className="text-green-500 font-bold text-xl " >Speedy Tv</p>
          <p className="font-bold" >Nuestro nuevo servicio de TV</p>
          <p className="" >Mayor variedad para todos</p>
        </div>
      </div>



      <div className="md:flex">

        <div className="relative flex justify-end items-center my-4 md:mr-2 ">
          <img className="rounded-xl" src={bannerSpeedTest} alt="banner test de velocidad" />

          <div className="absolute z-10 w-11/12 mx-4  text-white text-right">
            <p className="text-xs  md:text-lg font-bold ">Test de velocidad</p>
            <p className="text-xs  md:text-sm">Conoce que tan rápida es tu navegación a través de tu computadora o móvil.</p>
            <button
              className="text-xs   bg-secondary hover:bg-pink-700 border-2 border-white px-2 py-1 my-1 rounded-full "
              onClick={() => window.open("https://www.speedtest.net/es", "_blank")}
            >
              Ir al Test de velocidad
            </button>
          </div>
        </div>

        <div className="relative flex justify-start items-center my-4 md:ml-2">
          <img className="rounded-xl" src={bannerHelp} alt="banner ayuda" />

          <div className="absolute z-10 w-11/12 mx-4 text-white text-left">
            <p className="text-xs md:text-lg font-bold">¿Eres cliente de Speedy Hogar?</p>
            <p className="text-xs ">Aquí te guiaremos y resolveremos tus dudas
              para entregarte el mejor servicio.</p>
            <button
              className="text-xs bg-primary hover:bg-primary-dark border-2 border-white  px-2 py-1 my-1 rounded-full "
              onClick={() => window.open("https://www.speedtest.net/es", "_blank")}
            >
              Ver opciones de ayuda
            </button>
          </div>
        </div>

      </div>


      <div className="relative flex justify-end items-center my-4 md:mr-2 ">
        <img className="object-cover object-left h-32 w-full rounded-xl" src={bannerSupport} alt="banner soporte t" />

        <div className="absolute w-9/12 mx-4 text-right ">
          <p className="text-blue-800 font-bold text-xl " >Soporte</p>
          <p className="text-xs" >Nuestro equipo de soporte técnico está aquí para
            ayudarte a navegar en un mundo conectado.</p>

          <button
            className="text-sm bg-primary hover:bg-primary-dark border-2 border-white text-white  px-2 py-1 my-1 rounded-full "
            onClick={() => window.open("", "_blank")}
          >
            Contáctanos
          </button>

        </div>
      </div>






    </div>
  )
}

export default Info