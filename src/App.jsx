import HomePage from "./pages/home/HomePage"
import { Routes, Route } from 'react-router-dom'
import UsPage from "./pages/us/UsPage"

function App() {

  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/nosotros' element={<UsPage />} />

    </Routes>

  )
}

export default App
