import { Link } from "react-router-dom"

const BlogCard = ({ id, title, hero, img, date }) => {
  const { day, month, year } = date
  return (
    <Link to={`/blogs/${id}`}
      className='flex flex-col justify-between w-full md:w-5/12 lg:w-4/12 h-[22rem] my-4 md:mx-4 '
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
        <p className='text-center text-4xl font-bold'>{day}</p>
        <p className='text-center text-base'>{month}</p>
        <p className='text-center text-base'>{year}</p>
      </div>

      <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
        <p className='font-bold'>{title}</p>
        <p className='font-light'>{hero}  </p>
      </div>
    </Link>
  )
}

export default BlogCard