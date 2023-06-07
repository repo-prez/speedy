import { Link } from "react-router-dom"

const CardBlog = ({ id, img, date, title, hero, description }) => {

  const { day, month, year } = date

  return (

    <Link to={`/blogs/${id}`} target="_blank">
      <div
        className={`
      w-full md:w-[20rem] rounded-xl my-4 md:mx-2 lg:mx-0 bg-background-light
      ${id === 1 || id === 2 ? 'lg:w-[25rem] xl:w-[37rem] xxl:w-[38rem] ' : 'lg:w-[16.3rem] xl:w-[23rem] xxl:w-[25rem] '}
      `}
      >

        <img className="rounded-t-xl w-full h-[10rem] lg:h-[12rem] xl:h-[15rem] xxl:h-[16rem] object-cover" src={img} alt={'img' + title} />

        <div className="bg-gradient-to-r from-secondary to-text via-primary-dark h-[0.3rem]" />

        <div className="mx-4 py-2 h-[7rem] ">
          <h3 className="text-text text-2xl lg:text-lg xl:text-2xl font-bold">{title}</h3>
          <p className="text-sm lg:text-base">{description}</p>
        </div>

      </div>

    </Link >
  )
}



export default CardBlog