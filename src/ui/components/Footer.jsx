
import logoSpeedy from '../../assets/img/logoSpeedy.png'
import phone from '../../assets/icons/phone.png'
import phoneActive from '../../assets/icons/phoneActive.png'
import location from '../../assets/icons/location.png'
import locationActive from '../../assets/icons/locationActive.png'

import svgFacebook from '../../assets/icons/svgFacebook.svg'
import svgInstagram from '../../assets/icons/svgInstagram.svg'

const Footer = () => {
  return (
    <div className='lg:flex lg:flex-col bg-gradient-to-r from-blue-800 to-blue-950 w-full p-8 lg:px-32 ' >



      <img src={logoSpeedy} width={150} alt="logoSpeedy" />

      <div className='lg:flex'>

        {/* Left Column */}
        <div className='lg:w-1/2 lg:pr-4'>
          <div className='text-white '>
            <p className='my-4 font-bold'>ACERCA DE</p>
            <p className='text-justify'>Somos una empresa Ambateña con más de 15 años de experiencia, brindando servicios de internet y transmisión de datos de alta capacidad y velocidad, brindando un servicio estable, seguro y rápido con nuestra red de fibra óptica satisfaciendo así los requerimientos de la población.</p>
          </div>

          {/* TODO: Change image with over mouse */}
          <div className='flex items-start justify-start text-white my-8 '>

            <div className='md:w-2/4'>
              <img src={phone} width={50} alt="" />
              <p>Matriz Ambato: Calle las Frutillas y Guaytambos, sector Ficoa</p>
            </div>

            <div className='md:w:1/4 mx-4'>
              <img src={location} width={30} alt="" />
              <p>(02) 4 700 600 / 0994 50 50 50 </p>

            </div>

          </div>
        </div>



        {/* Right column */}
        <div className='lg:w-1/2 lg:pl-4 ' >

          <div className='flex flex-col'>
            <div className='flex justify-around  text-white'>

              <div>
                <p className='font-bold my-8'>CATEGORIAS</p>
                <div className='flex flex-col underline'>
                  <a href="">Internet Hogar</a>
                  <a href="">Internet Corporativo</a>
                  <a href="">Streaming</a>
                  <a href="">Dual</a>
                </div>
              </div>


              <div>
                <p className='font-bold my-8'>LINKS</p>
                <div className='flex flex-col underline'>
                  <a href="">Inicio</a>
                  <a href="">Nosotros</a>
                  <a href="">Planes</a>
                  <a href="">Links de Interes</a>
                  <a href="">Contáctanos</a>
                </div>
              </div>

            </div>


            {/* Social Networks */}

            <div className='flex justify-center my-8'>
              <img className='m-2' src={svgFacebook} width={50} alt="svgFacebook" />
              <img className='m-2' src={svgInstagram} width={50} alt="svgInstagram" />
            </div>


          </div>

        </div>




      </div>

      <p className='text-white border-t-2 p-1 text-justify'>Copyright © 2023 All Rights Reserved by <a className='underline' href="https://agenciaprez.com/" target='_blank' rel="noreferrer">Agencia Prez</a>.</p>

    </div >
  )
}

export default Footer