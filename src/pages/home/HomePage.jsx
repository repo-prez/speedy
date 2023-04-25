import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import Banner from './components/Banner'
import Plans from './components/Plans'
import Form from './components/Form'
import Info from './components/Info'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center bg-slate-200'>
      <NavBar />
      <Banner />
      <Plans />
      <Form />
      <Info />

      <Footer />

    </div>
  )
}

export default HomePage