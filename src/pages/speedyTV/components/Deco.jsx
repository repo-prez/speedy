import svgNetflix from '../../../assets/icons/svgNetflix.svg'
import svgAmazon from '../../../assets/icons/svgAmazon.svg'
import svgGooglePlay from '../../../assets/icons/svgGooglePlay.svg'
import svgHboMax from '../../../assets/icons/svgHboMax.svg'
import svgSpotyfy from '../../../assets/icons/svgSpotyfy.svg'
import svgTwich from '../../../assets/icons/svgTwich.svg'
import svgYoutube from '../../../assets/icons/svgYoutube.svg'

const Deco = () => {
  return (

    <div className="flex flex-col items-center mb-24 w-full ">
      <p className="w-5/6  lg:w-8/12  text-lg lg:text-2xl font-bold mb-8">Conoce nuestro decodificador Speedy TV</p>


      <div className="flex flex-col items-center bg-white w-5/6 lg:w-8/12 p-4 md:p-10 rounded-2xl  shadow-2xl">

        <div className="flex flex-col items-center lg:flex-row ">
          <div className="">
            <p className="font-bold text-lg md:text-2xl mb-2">Si quieres una mejor experiencia o tu Smart TV no es compatible con la APP ¡Lleva tu Deco Speedy TV!</p>
            <p className="text-base">El Deco Speedy TV tiene una interfaz Android TV la cual permite que puedas ver el contenido de TV Lite y aplicaciones de Google Play.</p>
          </div>
          <img className='w-4/6 lg:w-3/6' src="https://mundotek.com.ec/wp-content/uploads/2021/06/box_s_main.png" alt="" />
        </div>

        <p className="text-center text-xl font-bold">Accede a tus Apps Favoritas</p>

        <div className='flex flex-wrap justify-center'>
          <img className='w-[4rem] mx-1' src={svgNetflix} alt="Logo" />
          <img className='w-[2rem] mx-1' src={svgSpotyfy} alt="Logo" />
          <img className='w-[5rem] mx-1' src={svgYoutube} alt="Logo" />
          <img className='w-[6rem] mx-1' src={svgHboMax} alt="Logo" />
          <img className='w-[2rem] mx-1' src={svgTwich} alt="Logo" />
          <img className='w-[6rem] mx-1' src={svgAmazon} alt="Logo" />
          <img className='w-[2rem] mx-1' src={svgGooglePlay} alt="Logo" />
        </div>


        <button className='bg-secondary hover:bg-pink-700 text-white p-2 font-bold rounded-2xl my-4 w-2/3 lg:w-1/3 '>Contratar Ahora</button>
      </div>


    </div>





  )
}

export default Deco