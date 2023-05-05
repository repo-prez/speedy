import React from 'react'

const CardBlog = ({ img, date, title, hero, description }) => {

  const { day, month, year } = date

  return (

    <div className='flex  relative m-2 w-5/6 md:w-5/12 lg:w-4/12  shadow-lg overflow-hidden shadow-xl' >
      <img src={img} alt="" />

      <div className='absolute top-0 flex flex-col items-center bg-secondary text-white w-16'>
        <p className='font-bold text-4xl'>{day}</p>
        <p className=''>{month}</p>
        <p className=''>{year}</p>
      </div>

      <div className={`absolute bottom-2 left-4 text-white overflow-hidden `}>
        <p className=''>{title}</p>
        <p className='font-bold text-2xl'>{hero}</p>
        {/* <p className=''>{description}</p> */}
      </div>

    </div >
  )
}

export default CardBlog