import { useContext, useState } from 'react'


import speedyLogo from '../../assets/img/logoSpeedy.svg'
import burgerMenuIcon from '../../assets/icons/svgBurgerMenu.svg'
import closeMenuIcon from '../../assets/icons/svgCloseMenu.svg'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'


const NavBar = () => {

  const { setFilterHome } = useContext(AppContext)

  const [showBurgerMenu, setShowBurgerMenu] = useState(true)


  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }


  const handleShowMenu = (e) => {
    setFilterHome(true)
  }

  const handleHideMenu = () => {
    setFilterHome(false)
  }

  return (
    <div className={`relative text-white   xl:text-xl `}>


      {/* Normal Menu */}
      <div className='px-4 bg-gradient-to-r from-primary to-primary-dark hidden md:flex flex-col '>


        {/* Header */}
        {/* <div className={`justify-between  md:flex md:mb-2 `}>

          <div className="flex items-center">
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2 h-5">Personas</p>
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2 h-5">Corporativo</p>
          </div>

          <div className="flex items-center">
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2 h-5">Paga tu Cuenta</p>
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2 h-5">Sucursales y Oficinas</p>
            <p className="my-1 mx-3 cursor-pointer hover:border-b-2 h-5">My Speedy</p>
          </div>

        </div> */}



        <div className=' relative justify-center items-center md:flex md:justify-end lg:justify-center mt-4'>
          <Link to='/'>
            <img className=' w-[175px] md:w-[150px] absolute left-0 top-1  ' src={speedyLogo} alt="icon speedy" />
          </Link>


          <div className="flex  h-16 md:justify-end lg:justify-center  invisible md:visible md:ml-16">

            <div className='py-4'>
              <Link
                to='/'
                onMouseEnter={(e) => handleShowMenu(e)}
                onMouseLeave={() => handleHideMenu()}
                onClick={() => handleHideMenu()}
              >
                <p className='rounded-xl cursor-pointer px-3 py-1  hover:bg-indigo-600/30 ease-in-out duration-500'>Inicio </p>
              </Link>
            </div>

            <div className='py-4'>
              <Link
                to='/speedytv'
                onMouseEnter={(e) => handleShowMenu(e)}
                onMouseLeave={() => handleHideMenu()}
                onClick={() => handleHideMenu()}
              >
                <p className='rounded-xl cursor-pointer px-3 py-1  hover:bg-indigo-600/30 ease-in-out duration-500'>Speedy TV </p>
              </Link>
            </div>



            <div  >
              <div
                id='planes'
                onMouseEnter={(e) => handleShowMenu(e)}
                onMouseLeave={() => handleHideMenu()}
                className="peer p-4  "
              >
                <p className='rounded-xl cursor-pointer px-3 py-1 xl:py-[2px] hover:bg-indigo-600/30 ease-in-out duration-500'>Planes de Internet</p>
              </div>


              {/* HoverMenu */}
              <div
                onMouseEnter={(e) => handleShowMenu(e)}
                onMouseLeave={() => handleHideMenu()}
                onClick={() => handleHideMenu()}
                className="absolute z-50  w-1/6 rounded-b-lg border-t-4  border-secondary hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg text-black divide-y p-2 shadow-xl"
              >
                <Link className="px-5 py-3 hover:bg-gray-200" to='/hogar'>Internet Hogar</Link>
                <Link className="px-5 py-3 hover:bg-gray-200" to='/corporativo'>Internet Corporativo</Link>
              </div>
            </div>



            <div className='py-4'>
              <Link
                to='/cobertura'
                onMouseEnter={(e) => handleShowMenu(e)}
                onMouseLeave={() => handleHideMenu()}
                onClick={() => handleHideMenu()}
              >
                <p className='rounded-xl cursor-pointer px-3 py-1  hover:bg-indigo-600/30 ease-in-out duration-500'>Cobertura </p>
              </Link>
            </div>


            <div className='py-4'>
              <Link
                to='/serviciocliente'
                onMouseEnter={(e) => handleShowMenu(e)}
                onMouseLeave={() => handleHideMenu()}
                onClick={() => handleHideMenu()}
              >
                <p className='rounded-xl cursor-pointer px-3 py-1  hover:bg-indigo-600/30 ease-in-out duration-500'>Servicio al cliente </p>
              </Link>
            </div>





          </div>
        </div>



      </div>






      {/* Burger Menu */}
      <div className='flex flex-col md:hidden '>

        <div className='flex justify-between  p-4 bg-gradient-to-r from-primary to-primary-dark'>
          <Link to='/'>
            <img className='w-1/2' src={speedyLogo} alt="logo" />
          </Link>
          {showBurgerMenu ?
            <img className='' width={50} src={burgerMenuIcon} alt="icon" onClick={toggleBurgerMenu} />
            :
            <img className='' width={50} src={closeMenuIcon} alt="icon" onClick={toggleBurgerMenu} />
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
            to={'/speedytv'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>SpeedyTv</p>
          </Link>

          <Link
            to={'/hogar'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Internet Hogar</p>
          </Link>

          <Link
            to={'/corporativo'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Internet Corporativo</p>
          </Link>

          <Link
            to={'/cobertura'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Cobertura</p>
          </Link>

          <Link
            to={'/blogs'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Blogs</p>
          </Link>

          <Link
            to={'/serviciocliente'}
            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
            <p>Servicio al cliente</p>
          </Link>

        </div>
      </div>


    </div>
  )
}

export default NavBar