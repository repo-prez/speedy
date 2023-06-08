import CardBlog from './CardBlog'


import { dataBlogs } from '../../../data/blog.js'
import { Link } from 'react-router-dom'


const Blogs = ({ title = 'Speedy Blogs' }) => {

  return (

    <>
      <p className=' text-center my-12 text-primary text-5xl font-bold'>{title}</p>
      {/* <p className=' text-center my-12 text-primary text-5xl font-bold'>{window.innerWidth}</p> */}

      <div className='relative px-8 lg:px-0 flex justify-center' >


        <div className='w-full lg:w-10/12 xxl:w-8/12 md:flex flex-wrap justify-center lg:justify-between'>
          {
            dataBlogs.map((blog) => (
              <CardBlog key={blog.id} {...blog} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Blogs