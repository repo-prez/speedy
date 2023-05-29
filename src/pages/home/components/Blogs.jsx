import CardBlog from './CardBlog'


import { dataBlogs } from '../../../data/blog.js'
import { Link } from 'react-router-dom'


const Blogs = () => {

  return (

    <div className='relative w-full xl:flex flex flex-col items-center ' >

      <p className=' text-center my-12 text-primary text-4xl font-bold'>Speedy Blog's</p>

      <div className='flex lg:w-10/12 rounded-xl mb-10 w-full xl:w-8/12 overflow-x-scroll no-scrollbar lg:hidden'>
        {dataBlogs.map((item, index) => (<CardBlog key={index} {...item} />))}
      </div>

      <div className='lg:w-10/12 xl:w-8/12 sm:hidden lg:flex flex-wrap justify-between'>

        <Link to={`/blogs/${dataBlogs[0].id}`} target='_top'
          className='flex flex-col justify-between w-7/12 h-[22rem] mr-4 mb-4'
          style={{ backgroundImage: `url(${dataBlogs[0].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataBlogs[0].date.day]}</p>
            <p className='text-center text-base'>{[dataBlogs[0].date.month]}</p>
            <p className='text-center text-base'>{[dataBlogs[0].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>{dataBlogs[0].title}</p>
            <p className='font-light'>{dataBlogs[0].hero}  </p>
          </div>
        </Link>


        <Link to={`/blogs/${dataBlogs[1].id}`} target='_top'
          className='flex flex-col justify-between w-4/12 h-[22rem]'
          style={{ backgroundImage: `url(${dataBlogs[1].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataBlogs[1].date.day]}</p>
            <p className='text-center text-base'>{[dataBlogs[1].date.month]}</p>
            <p className='text-center text-base'>{[dataBlogs[1].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>{dataBlogs[1].title}</p>
            <p className='font-light'>{dataBlogs[1].hero}  </p>
          </div>
        </Link>

        <Link to={`/blogs/${dataBlogs[2].id}`} target='_top'
          className='flex flex-col justify-between w-[20rem] h-[22rem]  mb-4'
          style={{ backgroundImage: `url(${dataBlogs[2].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataBlogs[2].date.day]}</p>
            <p className='text-center text-base'>{[dataBlogs[2].date.month]}</p>
            <p className='text-center text-base'>{[dataBlogs[2].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>{dataBlogs[2].title}</p>
            <p className='font-light'>{dataBlogs[2].hero}  </p>
          </div>
        </Link>

        <Link to={`/blogs/${dataBlogs[3].id}`} target='_top'
          className='flex flex-col justify-between w-[20rem] h-[22rem] mb-4'
          style={{ backgroundImage: `url(${dataBlogs[3].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataBlogs[3].date.day]}</p>
            <p className='text-center text-base'>{[dataBlogs[3].date.month]}</p>
            <p className='text-center text-base'>{[dataBlogs[3].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>{dataBlogs[3].title}</p>
            <p className='font-light'>{dataBlogs[3].hero}  </p>
          </div>
        </Link>

        <Link to={`/blogs/${dataBlogs[4].id}`} target='_top'
          className='flex flex-col justify-between w-4/12 h-[22rem]  mb-4'
          style={{ backgroundImage: `url(${dataBlogs[4].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataBlogs[4].date.day]}</p>
            <p className='text-center text-base'>{[dataBlogs[4].date.month]}</p>
            <p className='text-center text-base'>{[dataBlogs[4].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>{dataBlogs[4].title}</p>
            <p className='font-light'>{dataBlogs[4].hero}  </p>
          </div>
        </Link>










      </div>

    </div>
  )
}

export default Blogs