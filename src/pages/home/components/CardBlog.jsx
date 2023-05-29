import { Link } from "react-router-dom"

const CardBlog = ({ id, img, date, title, hero, description }) => {

  const { day, month, year } = date

  return (

    <Link to={`/blogs/${id}`} target="_blank"
      className='flex   relative ml-8 lg:ml-0 lg:mr-8 h-96  '
      style={{
        backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >


      <div className=' absolute top-0 flex flex-col items-center bg-secondary text-white w-16'>
        <p className='font-bold text-4xl'>{day}</p>
        <p className=''>{month}</p>
        <p className=''>{year}</p>
      </div>

      <p className='w-80 invisible'>p</p>

      <div className={`absolute bottom-2 h-[10rem] p-2 mx-2 backdrop-blur-sm text-white  overflow-hidden lg:mr-4 xl:w-2/3 rounded-lg back bg-white/40 `}>
        <p className='font-bold'>{title}</p>
        <p className=' text-lg'>{hero}</p>
      </div>

    </Link >
  )
}

CardBlog.defaultProps = {
  img: 'https://images.unsplash.com/photo-1622837137190-4b7b0b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  date: {
    day: '01',
    month: 'Ene',
    year: '2021'
  },
  title: 'WiFi-6',
  hero: 'La nueva era de la conectividad inalámbrica con velocidades más rápidas y mayor capacidad de dispositivos.',
  description: 'La nueva era de la conectividad inalámbrica con velocidades más rápidas y mayor capacidad de dispositivos.',

}

export default CardBlog