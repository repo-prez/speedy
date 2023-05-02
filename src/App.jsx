import { Routes, Route } from 'react-router-dom'

import HomePage from "./pages/home/HomePage"
import UsPage from "./pages/us/UsPage"
import ContactPage from "./pages/contact/ContactPage"

function App() {

  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/nosotros' element={<UsPage />} />
      <Route path='/contacto' element={<ContactPage />} />

    </Routes>

  )
}

export default App
