import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import WpPopUp from '../../ui/components/WpPopUp'
import Support from './components/Support'
import QAndA from './components/QAndA'
import { Helmet } from 'react-helmet'

const CustomerServicePage = () => {
  const { filterHome } = useContext(AppContext)
  return (
    <div className='bg-slate-200'>

      <Helmet >
        <html lang="es" />
        <title>Internet sin límites</title>
        <meta title='Speedy | Servicio al Cliente' />
        <meta name="description" content="Speedy, servicio al cliente." />
        <meta name="author" content="Prez by Célimo Constante" />
      </Helmet>

      <NavBar />
      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`}> </div>}

      <Support />

      <QAndA />
      <WpPopUp />
      <Footer />
    </div>
  )
}

export default CustomerServicePage