import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'
import Products from './components/Products'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center bg-slate-200'>

      <Helmet >
        <html lang="es" />
        <title>Internet sin límites</title>
        <meta title='Speedy | Internet sin límites' />
        <meta name="description" content="Speedy, la empresa proveedora de Internet líder en el centro del país." />
        <meta name="author" content="Prez" />
        <meta name="robots" content="index" />


      </Helmet>

      <NavBar />
      <Products />
      {/* <Form /> */}
      {/* <Info /> */}
      {/* <Map /> */}
      {/* <Footer /> */}


    </div>
  )
}

export default HomePage