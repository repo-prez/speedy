
import logoSpeedy from '../../assets/img/logoSpeedy.svg'
import logoTwitter from '../../assets/icons/twiter.svg'
import logoTiktok from '../../assets/icons/tiktok.svg'
import logoFacebook from '../../assets/icons/facebook.svg'
import logoWhatsappWhite from '../../assets/icons/svgWhatsapp.svg'
import logoWhatsAppColored from '../../assets/icons/svgWhatsappColored.svg'

import logoInstagram from '../../assets/icons/instagram.svg'
import logoYoutube from '../../assets/icons/youtube.svg'
import logoLinkedin from '../../assets/icons/linkedin.svg'
import logoCambiate from '../../assets/icons/cambiate.svg'
import logoCustomerService from '../../assets/icons/svgCustomerService.svg'
import logoSignal from '../../assets/icons/svgSignal.svg'

import phone from '../../assets/icons/phone.png'
import phoneActive from '../../assets/icons/phoneActive.png'
import location from '../../assets/icons/location.png'
import locationActive from '../../assets/icons/locationActive.png'

import logoMas from '../../assets/icons/mas.svg'
import logoX from '../../assets/icons/x.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {

  const [menuHelp, setMenuHelp] = useState(false)

  const [menuSpeedy, setMenuSpeedy] = useState(false)

  const [menuLegal, setMenuLegal] = useState(false)

  return (

    <div className='lg:flex lg:justify-center items-center bg-gradient-to-r from-primary to-primary-dark w-full ' >


      <div className='flex flex-col lg:flex-row lg:justify-between lg:w-10/12 xl:w-8/12'>

        <div className=''>

          {/* Logos */}
          <div className='px-8 lg:px-0 py-4 flex flex-col md:flex-row md:justify-between lg:w-10/12 xl:w-8/12 '>
            <img className='w-1/3 lg:w-[10rem]' src={logoSpeedy} alt="icon speddy" />

            <div className='flex py-4 justify-between md:w-2/4 lg:w-1/4  '>
              <img className='w-[1.5rem] mr-2 lg:mr-4 hover:scale-125 transition' src={logoWhatsappWhite} alt="icon whatsapp" />
              <img className='w-[1.5rem] mr-2 lg:mr-4 hover:scale-125 transition' src={logoInstagram} alt="icon instagram" />
              <img className='w-[1.5rem] mr-2 lg:mr-4 hover:scale-125 transition' src={logoTwitter} alt="icon twitter" />
              <img className='w-[1.5rem] mr-2 lg:mr-4 hover:scale-125 transition' src={logoTiktok} alt="icon tiktok" />
              <img className='w-[1.5rem] mr-2 lg:mr-4 hover:scale-125 transition' src={logoFacebook} alt="icon facebook" />
              <img className='w-[1.5rem] mr-2 lg:mr-4 hover:scale-125 transition' src={logoYoutube} alt="icon youtube" />
            </div>
          </div>

          {/* Section 1 */}
          <div className='flex flex-col md:flex-row md:justify-between px-8 lg:px-0'>

            <div className='text-white py-4 lg:pr-8'>
              <p className='font-bold'>Si quieres cambiarte a  Speedy</p>

              <a className='flex items-center py-1'>
                <img className='w-[2rem] mr-4' src={logoCambiate} alt="icon" />
                <p>Cámbiate aquí</p>
              </a>

              <a className='flex items-center py-1'>
                <img className='w-[2rem] mr-4' src={logoCustomerService} alt="icon" />
                <p>O si prefieres te llamamos</p>
              </a>

              <a className='flex items-center py-1'>
                <img className='w-[2rem] mr-4' src={logoSignal} alt="icon" />
                <p>Conoce nuestra cobertura</p>
              </a>
            </div>


            <div className='text-white py-4'>
              <p className='font-bold'>Si eres cliente</p>

              <a className='flex items-center py-1'>
                <img className='w-[2rem] mr-4' src={phone} alt="icon" />
                <p>Comunícate con un asesor</p>
              </a>

              <a className='flex items-center py-1'>
                <img className='w-[2rem] mr-4' src={logoWhatsappWhite} alt="icon" />
                <p>Chatea con un asesor</p>
              </a>

              <a className='flex items-center py-1'>
                <img className='w-[1.5rem] mr-4' src={location} alt="icon" />
                <p>Busca la oficina mas cercana</p>
              </a>

            </div>

          </div>

        </div>

        <div className='md:flex md:justify-between md:items-start lg:mt-20 px-8 text-white '>

          <div className='my-6  mx-2'>
            <p className='font-bold border-b-[1px] mb-2'>Te ayudamos</p>

            <p>Centro de ayuda</p>
            <p>Reclamos</p>
            <p>Servicio multibanda</p>
          </div>

          <div className='my-6 mx-2'>
            <p className='font-bold border-b-[1px] mb-2'>Sobre Speedy</p>

            <a href="/blogs" target='_top'>Blogs</a>
            <p>Trabaja con nosotros</p>
          </div>

          <div className='mt-6 mx-2 pb-4'>
            <p className='font-bold border-b-[1px] mb-2'>Términos Legales</p>

            <p>Arcotel</p>
          </div>


        </div>

      </div>

    </div >
  )
}

export default Footer