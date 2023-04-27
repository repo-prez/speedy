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
    <div className={`relative bg-gradient-to-r from-blue-800 to-blue-950 text-white w-full lg:h-32 `}>

      {/* Header */}
      <div className={`flex justify-between hidden md:flex h-12`}>

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

      <div className='px-6 py-4 '>
        <div className='absolute bottom-2'>
          <img src={homeLogo} alt="" width={200} />
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
          className='absolute bottom-6 right-4 md:hidden '
          onClick={toggleBurgerMenu}
        >
          {
            showBurgerMenu
              ? <img src={burgerMenuIcon} alt="" width={30} />
              : <img src={closeMenuIcon} alt="" width={30} />
          }
        </button>

        <div className={`absolute z-20 top-24 right-0 flex flex-col justify-center items-center w-screen  my-2  bg-slate-200 text-slate-700 md:hidden ${showBurgerMenu && `hidden`} 
        animate__animated animate__faster animate__fadeInRight
        `}>


          <Link to={'/'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Inicio</p>
          </Link>

          <Link to={'/nosotros'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Nosotros</p>
          </Link>

          <Link to={'/planes'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Planes de Internet</p>
          </Link>

          <Link to={'/speedytv'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Speedy TV</p>
          </Link>

          <Link to={'/pagos'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Paga tu cuenta</p>
          </Link>

          <Link to={'/sucursales'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Sucursales y Oficinas</p>
          </Link>

          <Link to={'/contacto'}>
            <p className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" >Contáctanos</p>
          </Link>
        </div>

      </div>






    </div>
  )
}

export default NavBar