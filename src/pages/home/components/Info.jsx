import svgHorizontalSpeedyTv from '../../../assets/icons/svgHorizontalSpeedyTv.svg'

import bannerHelp from "../../../assets/img/banners/bannerHelp.png"
import bannerSpeedyTv from '../../../assets/img/banners/bannerSpeedyTv.png'


import bannerSpeedTest from '../../../assets/img/banners/bannerSpeedTest.png'
import bannerSupport from '../../../assets/img/banners/bannerSupport.png'


const Info = () => {
  return (
    <div className="flex flex-col items-center  px-8 lg:px-0 my-12 ">

      <div className="lg:w-10/12 xxl:w-8/12">


        <div className="relative flex justify-start lg:justify-around items-center my-4 rounded-xl ">
          <img className="object-cover object-[-60rem] md:object-[-45rem] lg:object-[-38rem] xl:object-[-25rem] h-40 w-full rounded-xl" src={bannerSpeedyTv} alt="banner tv" />

          <div className="absolute z-10 top-5 left-5 md:left-5 lg:top-1/3 lg:left-20 ">
            <img src={svgHorizontalSpeedyTv} className='w-[12rem] lg:w-[15rem]' alt="" />
          </div>

          <div className='flex flex-col items-center absolute bottom-5 left-5 md:left-1/3 md:top-1/3 lg:right-1/4 lg:top-1/3'>
            <p className='text-secondary font-medium lg:text-xl'>Nuevo servicio de TV</p>
            <p className=" font-bold text-white text-2xl lg:text-4xl animate-pulse ">PROXIMAMENTE...</p>
          </div>
        </div>


        <div className="md:flex ">

          <div className="relative flex justify-end items-center my-4 md:mr-2 xl:w-1/2 ">
            <img className="rounded-xl h-40 object-cover xl:w-full" src={bannerSpeedTest} alt="banner test de velocidad" />

            <div className="absolute z-10 w-5/12  md:w-6/12  mx-4  text-white text-left ">
              <p className="text-xs  md:text-sm lg:text-base  xxl:text-xl" >Conoce que tan rápida es tu navegación a través de tu computadora o móvil.</p>
              <button
                className="font-semibold text-xs md:text-base lg:text-lg  bg-secondary hover:bg-pink-700 e px-2 py-1 my-1 rounded-full "
                onClick={() => window.open("https://www.speedtest.net/es", "_blank")}
              >
                Ir al test de velocidad
              </button>
            </div>
          </div>

          <div className="relative flex justify-start items-center my-4 md:ml-2 xl:w-1/2 b">
            <img className="rounded-xl h-40 object-cover xl:w-full" src={bannerHelp} alt="banner ayuda" />

            <div className="absolute z-10 w-8/12  lg:w-7/12 mx-4 text-white text-left ">

              <p className=" text-xs md:text-base xl:text-xl ">¿Eres cliente de Speedy Hogar?</p>
              <p className="text-xs  md:text-sm lg:text-base xxl:text-xl">Aquí te guiaremos y resolveremos tus dudas para entregarte el mejor servicio.</p>
              <button
                className="font-bold text-xs md:text-base lg:text-lg  bg-primary-light hover:bg-cyan-500  px-2 py-1 my-1 rounded-full "
                onClick={() => window.open("https://www.speedtest.net/es", "_blank")}
              >
                Ver opciones de ayuda
              </button>
            </div>
          </div>

        </div>


        <div className="relative flex justify-start lg:justify-around items-center my-4 rounded-xl ">
          <img className="object-cover object-[-6rem] xl:object-[-1px] h-40 w-full rounded-xl" src={bannerSupport} alt="banner tv" />

          <div className="absolute right-1 md:left-48 xl:left-96 text-primary-dark w-5/12 md:w-8/12 ld:w-10/12  mx-4 text-left ">
            <p className="text-primary-light font-bold text-xl md:text-4xl lg:text-4xl" >Soporte</p>
            <p className="text-xs md:text-xl lg:text-2xl" >Nuestro equipo de soporte técnico está aquí para
              ayudarte a navegar en un mundo conectado.</p>

            <button
              className="text-sm md:text-lg lg:text-lg  bg-secondary text-white hover:bg-pink-700 border-[1px] px-2 py-1 my-1 rounded-full "
              onClick={() => window.open("", "_blank")}
            >
              Contáctanos
            </button>
          </div>
        </div>




      </div>



    </div >
  )
}

export default Info