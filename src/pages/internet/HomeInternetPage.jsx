import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'

import svgGaming from '../../assets/icons/svgGaming.svg'
import svgDevices from '../../assets/icons/svgDevices.svg'
import svgInfinity from '../../assets/icons/svgIfinity.svg'
import svgRocket from '../../assets/icons/svgRocket.svg'
import svgMultipleDevices from '../../assets/icons/svgMultipleDevices.svg'
import svgInterference from '../../assets/icons/svgInterference.svg'
import svgDistance from '../../assets/icons/svgDistance.svg'

import router from '../../assets/img/media/EX220.png'

import bannerHomerInternet from '../../assets/img/banners/bannerInternetHome.webp'
import CardPlan from '../home/components/CardPlan'

import { homeInternet } from '../../data/internetHomePrices'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const HomeInternetPage = () => {
  const { filterHome } = useContext(AppContext)
  return (
    <>
      <NavBar />
      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`} />}

      <img className='object-cover h-[330px] w-auto ' src={bannerHomerInternet} alt="" />

      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-center pt-8 text-primary'>Internet Hogar Fibra Óptica</h1>
        <p className='text-xl text-center text-primary px-8 py-2'>Mejor experiencia del internet con más velocidad y estabilidad</p>



        {/* Products */}


        <div className={`flex rounded-xl  lg:justify-between  overflow-x-scroll no-scrollbar  md:w-full lg:w-10/12 xl:w-8/12 pl-8 lg:pl-0 `}>
          <CardPlan planData={homeInternet.plan1} />
          <CardPlan planData={homeInternet.plan2} />
          <CardPlan planData={homeInternet.plan3} />
          <CardPlan planData={homeInternet.plan4} />
          <CardPlan planData={homeInternet.plan5} />
          <CardPlan planData={homeInternet.plan6} />
        </div>

        <h2 className='text-xl md:text-4xl md:my-10 text-primary text-center py-4'>¿Cuáles son los Beneficios del Internet Hogar Speddy?</h2>



        {/* Descriptions */}

        <section className='flex justify-center bg-primary'>
          <div className='p-8  text-white md:flex md:flex-wrap lg:w-10/12'>

            <div className='flex items-start py-2 md:w-1/2  '>
              <img className='w-[4rem] mr-4' src={svgGaming} alt="icon Gaming" />
              <div>
                <p className='font-bold text-xl '>Ideal para el Gaming</p>
                <p>En tu red, todos los dispositivos y consolas tienen la posibilidad de conectarse y disfrutar de partidas en línea sin interrupciones durante todo el día.</p>
              </div>
            </div>

            <div className='flex items-start py-2 md:w-1/2  '>
              <img className='w-[4rem] mr-4' src={svgDevices} alt="icon" />
              <div>
                <p className='font-bold text-xl '>Todos conectados</p>
                <p>Conecta varios dispositivos sin afectar la velocidad de navegación.</p>
              </div>
            </div>

            <div className='flex items-start py-2 md:w-1/2  '>
              <img className='w-[4rem] mr-4' src={svgInfinity} alt="icon" />
              <div>
                <p className='font-bold text-xl '>Navega ilimitadamente</p>
                <p>No hay restricciones de uso de datos, olvidate del consumo y navega.</p>
              </div>
            </div>

            <div className='flex items-start py-2 md:w-1/2  '>
              <img className='w-[4rem] mr-4' src={svgRocket} alt="icon" />
              <div>
                <p className='font-bold text-xl '>Velocidad simétrica</p>
                <p>La velocidad de subida y bajada es la misma para que tu experiencia de navegación sea la mejor.</p>
              </div>
            </div>

          </div>

        </section>

        {/* Router */}
        <section className=' flex flex-col items-center'>

          <h2 className='text-2xl md:text-4xl text-primary text-center py-8'>Equipos de última tecnología con 2 bandas disponibles</h2>


          <div className='flex flex-col md:items-center lg:flex-row lg:w-10/12'>

            <div className='text-primary-dark px-8 md:w-2/3 lg:w-2/6'>
              <p className='text-xl py-2 text-primary'>Red de 2.4Ghz</p>
              <p>La banda de 2.4Ghz tiene un rango de señal más grande en comparación a la de 5Ghz, pero permite navegar hasta una velocidad de 54Mbps, es decir su rango de alcance es mas grande pero no es compatible con altas velocidades.</p>
            </div>

            <div className='flex flex-col items-center'>
              <img className='px-8 py-4 md:w-2/3' src={router} alt="router" />
              <p className='text-xs w-2/3'>* Si la tecnología WiFi (o WLAN) de tu dispositivo no es ac, ax o 6; sólo podrás navegar en la Red 2, 4 Ghz.</p>
            </div>

            <div className='text-primary-dark px-8 md:w-2/3 lg:w-2/6'>
              <p className='text-xl py-2 text-primary'>Red de 5Ghz</p>
              <p>Esta red te permite disfrutar de velocidades de navegación más rápidas. Si tu dispositivo muestra las redes de 2, 4 y 5 GHz, podrás conectarte a ambas según tu ubicación dentro de tu hogar. Cuando te encuentres lejos del router, tu dispositivo se conectará a la red de 2.4 GHz, y cuando estés cerca, se conectará a la red de 5 GHz.</p>
            </div>

          </div>

        </section>

        {/* Wiffi */}

        <section className='lg:flex lg:flex-col lg:items-center '>
          <h2 className='text-2xl md:text-4xl text-primary text-center pt-8 md:px-8  '>¿Qué afecta la velocidad del WiFi en tu hogar?</h2>

          <div className='md:flex md:flex-col md:items-center lg:flex-row lg:items-start lg:w-10/12'>

            <div className='flex flex-col items-center  px-8 py-4 md:w-2/3'>
              <p className='text-xl py-2 text-primary'>Cantidad de dispositivos</p>
              <img className='w-[5rem] h-auto py-2' src={svgMultipleDevices} alt="" />
              <p>La velocidad se comparte entre los dispositivos que tienes conectados simultáneamente. Además la cobertura de tu red se puede ver afectada mientras más dispositivos tengas conectados al mismo tiempo.</p>
            </div>

            <div className='flex flex-col items-center  px-8 py-4 md:w-2/3'>
              <p className='text-xl py-2 text-primary'>Interferencia y Obstáculos</p>
              <img className='h-[3rem] w-auto py-2 md:my-4' src={svgInterference} alt="" />
              <p>La señal de WIFI podrá verse obstaculizada por muros, vidrios, entre otras cosas. Además la cercanía con otros dispositivos electrónicos pueden causar interferencia en la señal.</p>
            </div>

            <div className='flex flex-col items-center  px-8 py-4 md:w-2/3'>
              <p className='text-xl py-2 text-primary'>Distancia entre dispositivos</p>
              <img className='h-[3rem] w-auto py-2 md:my-4' src={svgDistance} alt="" />
              <p>La señal se debilita a medida que te alejas del router, es por eso que la velocidad de navegación se ve afectada.</p>
            </div>

          </div>
        </section>



      </div >



      <Footer />
    </>
  )
}

export default HomeInternetPage