import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

import HomePage from "./pages/home/HomePage"
import UsPage from "./pages/us/UsPage"
import ContactPage from "./pages/contact/ContactPage"
import SpeedyTvPage from './pages/speedyTV/SpeedyTvPage'
import CustomerServicePage from './pages/customerService/CustomerServicePage'
import BlogsPage from './pages/blogs/BlogsPage'
import BlogPage from './pages/blogs/BlogPage'

import { dataBlogs } from './data/blog'

function App() {

  return (

    <AppProvider>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<UsPage />} />
        <Route path='/cobertura' element={<ContactPage />} />
        {/* <Route path='/speedytv' element={<SpeedyTvPage />} /> */}
        <Route path='/serviciocliente' element={<CustomerServicePage />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/blogs/1' element={<BlogPage key={dataBlogs[0].id} {...dataBlogs[0]} />} />
        <Route path='/blogs/2' element={<BlogPage key={dataBlogs[1].id} {...dataBlogs[1]} />} />
        <Route path='/blogs/3' element={<BlogPage key={dataBlogs[2].id} {...dataBlogs[2]} />} />
        <Route path='/blogs/4' element={<BlogPage key={dataBlogs[3].id} {...dataBlogs[3]} />} />
        <Route path='/blogs/5' element={<BlogPage key={dataBlogs[4].id} {...dataBlogs[4]} />} />



      </Routes>

    </AppProvider>

  )
}

export default App
