import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import DownArrowAnimation from '../../components/DownArrowAnimation'
import BlogCard from './components/BlogCard'

import { dataBlogs } from '../../data/blog.js'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Helmet } from 'react-helmet'



const BlogsPage = () => {

  const categories = [...new Set(dataBlogs.map(blog => blog.category))]
  const { filterHome } = useContext(AppContext)


  return (
    <div className='bg-slate-200'>

      <Helmet >
        <html lang="es" />
        <title> Speedy Blogs</title>
        <meta title='Speedy | Noticias de actualidad' />
        <meta name="description" content="Speedy, la empresa proveedora de Internet líder en el centro del país." />
        <meta name="author" content="Prez by Célimo Constante" />
      </Helmet>


      <NavBar />
      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`}> </div>}


      {/* Hero */}
      <div className='flex flex-col items-center px-8 mb-16'>
        <h1 className='text-7xl font-extrabold w-fit p-2 my-6'>Blogs</h1>
        <p className='text-2xl leading-7 tracking-wide mb-10'> Descubre noticias novedosas en nuestra plataforma de <span className='font-bold'>blogs y despega</span> hacia el futuro de la información.</p>
        <DownArrowAnimation />
      </div>

      {/* Toasts */}
      <div className='flex flex-wrap justify-center my-4'>
        {categories.map(category => (<p key={category.id} className='bg-slate-800 text-white py-1 my-1 rounded-full px-4 mx-2 font-bold cursor-pointer' >{category}</p>))}
      </div>

      {/* Cards Blogs */}
      <div className='flex flex-wrap justify-center p-8'>
        {dataBlogs.map(blog => (<BlogCard key={blog.id} {...blog} />))}
      </div>



      <Footer />
    </div>
  )
}

export default BlogsPage