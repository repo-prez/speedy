import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

import HomePage from "./pages/home/HomePage"
import UsPage from "./pages/us/UsPage"
import ContactPage from "./pages/contact/ContactPage"
import SpeedyTvPage from './pages/speedyTV/SpeedyTvPage'
import CustomerServicePage from './pages/customerService/CustomerServicePage'
import BlogsPage from './pages/blogs/BlogsPage'

function App() {

  return (

    <AppProvider>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<UsPage />} />
        <Route path='/cobertura' element={<ContactPage />} />
        <Route path='/speedytv' element={<SpeedyTvPage />} />
        <Route path='/serviciocliente' element={<CustomerServicePage />} />
        <Route path='/blogs' element={<BlogsPage />} />
      </Routes>

    </AppProvider>

  )
}

export default App
