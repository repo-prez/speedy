import svgCheck from '../../../assets/icons/svgCheck.svg'

const CardQuality = ({ title, description }) => {
  return (

    <div className="flex items-start text-justify py-4 px-2 w-full md:w-1/2 lg:w-1/3">
      <img width={50} src={svgCheck} alt="icon check" />
      <div className="p-2 ">
        <p className="text-2xl">{title}</p>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}

export default CardQuality