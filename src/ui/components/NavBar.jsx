import { useState } from 'react'


import homeLogo from '../../assets/img/logoSpeedy.png'
import burgerMenuIcon from '../../assets/icons/svgBurgerMenu.svg'
import closeMenuIcon from '../../assets/icons/svgCloseMenu.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(true)

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }

  return (
    <div className={`relative bg-gradient-to-r from-primary to-primary-dark text-white w-full p-4 lg:h-32 `}>

      {/* Header */}
      <div className={`justify-between hidden md:flex `}>

        {/* Menu Plans */}
        <div className="flex items-center">
          <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Personas</p>
          <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Corporativo</p>
        </div>

        {/* Contact Data */}
        <div className="flex items-center">
          <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Paga tu cuenta</p>
          <p className="my-1 mx-3 cursor-pointer hover:border-b-2">Sucursales y Oficinas</p>
          <p className="my-1 mx-3 cursor-pointer hover:border-b-2">My Speedy</p>
        </div>

      </div>


      {/* Menu */}

      <div className=' '>
        <div className='absolute '>
          <img src={homeLogo} alt="icon speedy" width={200} />
        </div>

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



        {/* Burger menu */}

        <button
          className='absolute bottom-12 right-4 md:hidden '
          onClick={toggleBurgerMenu}
        >
          {
            showBurgerMenu
              ? <img src={burgerMenuIcon} alt="icon burger menu" width={30} />
              : <img src={closeMenuIcon} alt="icon close burger menu" width={30} />
          }
        </button>

        <div className={`absolute z-30 top-30 right-0 flex flex-col justify-center items-start w-full p-4  bg-slate-200 text-slate-700 text-xl  divide-y divide-slate-400    md:hidden ${showBurgerMenu && `hidden`} 
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