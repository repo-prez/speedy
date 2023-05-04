import { useState } from 'react'


import speedyLogo from '../../assets/img/logoSpeedy.svg'
import burgerMenuIcon from '../../assets/icons/svgBurgerMenu.svg'
import closeMenuIcon from '../../assets/icons/svgCloseMenu.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(true)

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }

  return (
    <div className={`relative text-white    `}>


      {/* Normal Menu */}
      <div className='px-4 bg-gradient-to-r from-primary to-primary-dark hidden md:flex flex-col '>


        {/* Header */}
        <div className={`justify-between  md:flex md:mb-2`}>

          <div className="flex items-center">
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Personas</p>
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Corporativo</p>
          </div>

          <div className="flex items-center">
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Paga tu cuenta</p>
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Sucursales y Oficinas</p>
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2">My Speedy</p>
          </div>

        </div>

        <div className=' relative justify-center items-center md:flex '>
          <img className=' w-[175px] absolute left-0' src={speedyLogo} alt="icon speedy" />

          <div className="flex  md:justify-end lg:justify-center  invisible md:visible">

            <Link to={'/'}>
              <p className="m-2 p-2 hover:border-b-2">Inicio</p>
            </Link>

            <Link to={'/nosotros'}>
              <p className="m-2 p-2 hover:border-b-2">Nosotros</p>
            </Link>

            <Link to={'/planes'}>
              <p className="m-2 p-2 hover:border-b-2">Planes de Internet</p>
            </Link>

            <Link to={'/contacto'}>
              <p className="m-2 p-2 hover:border-b-2">Contáctanos</p>
            </Link>



          </div>
        </div>



      </div>


      {/* Burger Menu */}
      <div className='flex flex-col md:hidden '>

        <div className='flex justify-between  p-4 bg-gradient-to-r from-primary to-primary-dark'>
          <img className='w-1/2' src={speedyLogo} alt="" />
          {showBurgerMenu ?
            <img className='' width={50} src={burgerMenuIcon} alt="" onClick={toggleBurgerMenu} />
            :
            <img className='' width={50} src={closeMenuIcon} alt="" onClick={toggleBurgerMenu} />
          }

        </div>

        <div className={` absolute  z-30 top-[80px] w-full  flex flex-col justify-center items-start  p-4  bg-slate-200 text-slate-700 text-xl  divide-y divide-slate-400    md:hidden ${showBurgerMenu && `hidden`} 
        animate__animated animate__faster animate__fadeInRight
        `}>
          <Link
            to={'/'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Inicio</p>
          </Link>

          <Link
            to={'/nosotros'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Nosotros</p>
          </Link>

          <Link
            to={'/planes'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Inicio</p>
          </Link>

          <Link
            to={'/speedytv'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>SpeedyTv</p>
          </Link>


          <Link
            to={'/pagos'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Pagos</p>
          </Link>

          <Link
            to={'/sucursales'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Sucursales</p>
          </Link>

          <Link
            to={'/contacto'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Contacto</p>
          </Link>

        </div>
      </div>





    </div>
  )
}

export default NavBar