import React from 'react'

const CardBlog = ({ img, date, title, hero, description }) => {

  const { day, month, year } = date

  return (

    <div className='flex   relative ml-8 lg:ml-0 lg:mr-8 h-96 ' >

      <img className='' src={img} alt="" />

      <div className=' absolute top-0 flex flex-col items-center bg-secondary text-white w-16'>
        <p className='font-bold text-4xl'>{day}</p>
        <p className=''>{month}</p>
        <p className=''>{year}</p>
      </div>

      <p className='w-80 invisible'>p</p>

      <div className={`absolute bottom-2 left-4 text-white overflow-hidden lg:mr-4 xl:w-2/3`}>
        <p className=''>{title}</p>
        <p className='font-bold text-2xl'>{hero}</p>
        {/* <p className=''>{description}</p> */}
      </div>

    </div >
  )
}

export default CardBlog