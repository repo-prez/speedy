import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

import HomePage from "./pages/home/HomePage"
import UsPage from "./pages/us/UsPage"
import ContactPage from "./pages/contact/ContactPage"
import SpeedyTvPage from './pages/speedyTV/SpeedyTvPage'

function App() {

  return (

    <AppProvider>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<UsPage />} />
        <Route path='/contacto' element={<ContactPage />} />
        <Route path='/speedytv' element={<SpeedyTvPage />} />
      </Routes>

    </AppProvider>

  )
}

export default App
