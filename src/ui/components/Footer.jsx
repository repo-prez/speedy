
import logoSpeedy from '../../assets/img/logoSpeedy.svg'
import logoTwitter from '../../assets/icons/twiter.svg'
import logoTiktok from '../../assets/icons/tiktok.svg'
import logoFacebook from '../../assets/icons/facebook.svg'
import logoInstagram from '../../assets/icons/instagram.svg'
import logoYoutube from '../../assets/icons/youtube.svg'
import logoLinkedin from '../../assets/icons/linkedin.svg'
import logoCambiate from '../../assets/icons/cambiate.svg'
import phone from '../../assets/icons/phone.png'
import phoneActive from '../../assets/icons/phoneActive.png'
import location from '../../assets/icons/location.png'
import locationActive from '../../assets/icons/locationActive.png'

import svgFacebook from '../../assets/icons/svgFacebook.svg'
import svgInstagram from '../../assets/icons/svgInstagram.svg'
import logoMas from '../../assets/icons/mas.svg'
import logoX from '../../assets/icons/x.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {

  const [menuHelp, setMenuHelp] = useState(false)

  const [menuSpeedy, setMenuSpeedy] = useState(false)

  const [menuLegal, setMenuLegal] = useState(false)

  return (
    <div className='lg:flex lg:flex-col bg-gradient-to-r from-primary to-primary-dark w-full p-8 lg:px-32' >

      <div className='md:flex md:justify-between lg:flex '>
        <img className='w-1/2 md:w-48' src={logoSpeedy} alt="logoSpeedy" />

        <div className='flex justify-left items-center space-x-5 my-8' >
          <img src={logoTiktok} width={25} />
          <img src={logoTwitter} width={25} />
          <img src={logoFacebook} width={25} />
          <img src={logoInstagram} width={25} />
          <img src={logoYoutube} width={25} />
          <img src={logoLinkedin} width={25} />
        </div>
      </div>

      <div className='lg:flex lg:justify-between '>
        <div className='lg:flex md:flex-col'>
          {/* Left Column */}
          <div className='md:flex justify-between text-sm'>
            <div>

              <div className='text-white '>
                <p className='my-4 font-bold'>Si deseas Cambiate a SPEEDY </p>
              </div>
              <div className='flex'>
                <img className='mr-2' src={logoCambiate} width={20} alt="" />
                <p className='my-3 font-bold text-white'>CAMBIATE AQUÍ</p>
              </div>
              <div className='flex'>
                <img className='mr-2' src={logoCambiate} width={20} alt="" />
                <p className='my-3 font-bold flex text-white'>O si prefieres <span className='text-secondary ml-1'>te llamamos</span></p>
              </div>
              <div className='flex'>
                <img className='mr-2' src={logoCambiate} width={20} alt="" />
                <p className='my-3 text-secondary font-bold'>Conoce nuestra cobertura</p>
              </div>

            </div>

            <div className='lg:ml-10'>
              <div className='items-start justify-start divide-y divide-slate-400 text-sm '>
                <div><p className='my-4 font-bold text-white'>Si eres Cliente:</p></div>
                <div className='flex'>
                  <img className='mr-2' src={logoCambiate} width={20} alt="" />
                  <p className='my-3 flex text-white'>Llamanos desde tu celular al<span className='text-secondary ml-1'>0994505050</span></p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex justify-start'>
                    <img className='mr-2' src={logoCambiate} width={20} alt="" />
                    <p className='my-3 flex text-white'>Escribenos por WhatsApp:<span className='text-secondary ml-1'>+593 994 505050</span></p>
                  </div>
                  <div className='flex '>
                    <img className='mr-2' src={logoCambiate} width={20} alt="" />
                    <p className='my-3 flex text-white'>Llámanos al:<span className='text-secondary ml-1'>+593 994 505050</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex text-white sm:divide-y md:divide-y-0 text-sm md:flex md:justify-between">
          <div>
            <div className='mt-3 mb-3 lg:mr-14'>

              <div className='flex justify-between'>
                <p className="font-bold md:mb-3">Te ayudamos</p>
                <div className='md:hidden'>
                  <button
                    onClick={() => setMenuHelp(!menuHelp)}
                  >
                    <img className={` ${menuHelp ? 'hidden' : ''}`} src={logoMas} width={15} alt="" />
                    <img className={` ${!menuHelp ? 'hidden' : ''}`} src={logoX} width={20} alt="" />
                  </button>
                </div>
              </div>


              <div className='md:block md:mb-3 lg:h-36'>
                <div className={` ${!menuHelp ? 'hidden md:block' : 'flex flex-col animate__animated animate__slideInDown animate__faster'}`}>
                  <Link to={''}>
                    <p className="mt-3 mb-3 hover:border-b ">Centro de Ayuda</p>
                  </Link>

                  <Link to={''}>
                    <p className="mt-3 mb-3 hover:border-b">Servicio técnico</p>
                  </Link>

                  <Link to={''}>
                    <p className="mt-3 mb-3 hover:border-b">Norma Multibanda</p>
                  </Link>

                  <Link to={''}>
                    <p className="mt-3 mb-3 hover:border-b">Reclamos</p>
                  </Link>
                  <Link to={''}>
                    <p className="mt-3 mb-3 hover:border-b">Conoce tus derechos</p>
                  </Link>
                </div>
              </div>


            </div>

          </div>

          <div className='lg:mr-14'>

            <div className='flex justify-between mt-3 mb-3'>
              <p className="md:mb-3 font-bold">Sobre Speedy</p>
              <div className='md:hidden'>
                <button
                  onClick={() => setMenuSpeedy(!menuSpeedy)}
                >
                  <img className={` ${menuSpeedy ? 'hidden' : ''}`} src={logoMas} width={15} alt="" />
                  <img className={` ${!menuSpeedy ? 'hidden' : ''}`} src={logoX} width={20} alt="" />
                </button>
              </div>
            </div>


            <div className={` ${!menuSpeedy ? 'hidden md:block' : 'flex flex-col animate__animated animate__slideInDown animate__faster'}`}>
              <div className='lg:block'>
                <Link to={''}>
                  <p className="mt-3 mb-3 hover:border-b">Nosotros</p>
                </Link>

                <Link to={''}>
                  <p className="mt-3 mb-3 hover:border-b">Trabaja con nosotros</p>
                </Link>
              </div>
            </div>



          </div>

          <div>
            <div className='flex justify-between mt-3 mb-2'>
              <p className="md:mb-3 font-bold">Terminos Legales</p>
              <div className='md:hidden'>
                <button
                  onClick={() => setMenuLegal(!menuLegal)}
                >
                  <img className={` ${menuLegal ? 'hidden' : ''}`} src={logoMas} width={15} alt="" />
                  <img className={` ${!menuLegal ? 'hidden' : ''}`} src={logoX} width={20} alt="" />
                </button>
              </div>
            </div>
            <div className={` ${!menuLegal ? 'hidden md:block' : 'flex flex-col animate__animated animate__slideInDown animate__faster'}`}>
              <Link to={''}>
                <p className="mt-3 mb-3 hover:border-b">Legal</p>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <p className='text-white border-t-2 p-1 text-justify '>Copyright © 2023 All Rights Reserved by <a href=''>AGENCIAPREZ</a></p>

    </div >
  )
}

export default Footer