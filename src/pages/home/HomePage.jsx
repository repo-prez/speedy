import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'
import Products from './components/Products'
import Blogs from './components/Blogs'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import WpPopUp from '../../ui/components/WpPopUp'


const HomePage = () => {
  const { filterHome } = useContext(AppContext)
  return (
    <div className={`relative bg-slate-200`}>


      {/* <Helmet >
        <html lang="es" />
        <title>Internet sin límites</title>
        <meta title='Speedy | Internet sin límites' />
        <meta name="description" content="Speedy, la empresa proveedora de Internet líder en el centro del país." />
        <meta name="author" content="Prez" />
        <meta name="robots" content="index" />
      </Helmet> */}


      <NavBar />
      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`} />}


      <Products />
      <WpPopUp />
      <Form />
      <Info />
      <Map />
      <Blogs />
      <Footer />




    </div>
  )
}

export default HomePage