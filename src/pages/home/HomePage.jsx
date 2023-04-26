import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'
import Products from './components/Products'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center bg-slate-200'>
      <NavBar />
      <Products />
      <Form />
      <Info />
      <Map />
      <Footer />


    </div>
  )
}

export default HomePage