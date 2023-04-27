import HomePage from "./pages/home/HomePage"
import { Routes, Route, Navigate } from 'react-router-dom'
import UsPage from "./pages/us/UsPage"

function App() {

  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/us' element={<UsPage />} />

    </Routes>

  )
}

export default App
