import NavBar from "../../ui/components/NavBar"
import Footer from "../../ui/components/Footer"

import { dataBlogs } from '../../data/blog'

import BlogCard2 from "./components/BlogCard2"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppContext"


const BlogPage = ({ id, date, title, category, hero, description, img, content }) => {

  const randomBlog2 = dataBlogs[Math.floor(Math.random() * dataBlogs.length)]
  const randomBlog1 = dataBlogs[Math.floor(Math.random() * dataBlogs.length)]



  const { filterHome } = useContext(AppContext)
  return (
    <>
      <NavBar />
      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`}> </div>}

      <div className="flex flex-col   items-center justify-center">
        <div
          className="flex flex-col justify-center items-center w-full md:w-full  h-[12rem] md:h-[20rem] mb-4  text-white"
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <div className="flex flex-col items-start w-full lg:w-8/12 ">
          <p className="text-sm italic text-slate-500">{`Fecha: ${date.day}/${date.month}/${date.year}`}</p>
          <p className="text-sm italic text-slate-500">{`Cateroría: ${category}`}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:w-8/12">

          {/* Content */}
          <div className="px-8 mb-8 lg:px-0  lg:text-2xl lg:w-8/12">
            <p className="font-bold my-4" >Descripción: <span className="font-normal italic">{description}</span></p>
            <p>{content}</p>
          </div>

          {/* Another Blogs */}
          <div className="px-8 md:flex lg:flex-col justify-center lg:w-4/12 ">
            <BlogCard2 {...randomBlog1} />
            <BlogCard2 {...randomBlog2} />
          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default BlogPage