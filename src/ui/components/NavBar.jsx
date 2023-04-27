import { useState } from 'react'


import homeLogo from '../../assets/img/logoSpeedy.png'
import burgerMenuIcon from '../../assets/icons/svgBurgerMenu.svg'
import closeMenuIcon from '../../assets/icons/svgCloseMenu.svg'


const NavBar = () => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(true)

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }

  return (
    <div className={`relative bg-gradient-to-r from-blue-800 to-blue-950 text-white w-full `}>

      {/* Header */}
      <div className={`flex justify-between hidden md:flex`}>

        {/* Menu Plans */}
        <div className="flex">
          <p className="m-1">Personas</p>
          <p className="m-1">Corporativo</p>
        </div>

        {/* Contact Data */}
        <div className="flex">
          <p className="m-1">Paga tu cuenta</p>
          <p className="m-1">Sucursales y Oficinas</p>
          <p className="m-1">My Speedy</p>
        </div>

      </div>


      {/* Menu */}

      <div className='px-6 py-4 '>
        <div className='absolute bottom-2'>
          <img src={homeLogo} alt="" width={200} />
        </div>

        <div className="flex  md:justify-end lg:justify-center  invisible md:visible">
          <a href=""> <p className="m-2 ">Inicio</p></a>
          <a href=""> <p className="m-2 ">Nosotros</p></a>
          <a href=""> <p className="m-2 ">Planes de Internet</p></a>
          <a href=""> <p className="m-2 ">Speedy TV</p></a>
        </div>


        {/* Burger menu */}

        <button
          className='absolute bottom-4 right-4 md:hidden '
          onClick={toggleBurgerMenu}
        >
          {
            showBurgerMenu
              ? <img src={burgerMenuIcon} alt="" width={30} />
              : <img src={closeMenuIcon} alt="" width={30} />
          }
        </button>

        <div className={`absolute z-20 top-16 right-0 flex flex-col justify-center items-center w-screen  my-2  bg-slate-200 text-slate-700 md:hidden ${showBurgerMenu && `hidden`} 
        animate__animated animate__faster animate__fadeInRight
        `}>

          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>Inicio</a>
          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>Nosotros</a>
          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>Planes de Internet</a>
          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>Speedy TV</a>
          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>Paga tu cuenta</a>
          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>Sucursales y Oficinas</a>
          <a className="py-2 cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full text-center" href='/'>My Speedy</a>
        </div>

      </div>






    </div>
  )
}

export default NavBar