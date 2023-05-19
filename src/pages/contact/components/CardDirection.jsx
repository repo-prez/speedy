import svgLocation from '../../../assets/icons/svgLocation.svg'
import PropTypes from 'prop-types'

const CardDirection = ({ ciudad, oficina, direccion, url }) => {
  return (
    <a
      className='flex my-4 mx-2 w-full h-[7rem] md:w-[20rem] lg:w-3/12 rounded-xl bg-white  hover:shadow-[1px_1px_10px_1px_rgba(0,0,0,0.56)] hover:shadow-secondary hover:scale-105 transform transition-all ease-in-out duration-300'
      href={url}
      target='_blank' rel="noreferrer"
    >
      <img className='border-r-2 border-secondary px-4 mx-2' src={svgLocation} width={70} alt="icon location" />
      <div className='flex flex-col justify-center pr-2'>
        <p className='font-bold'>{ciudad}</p>
        <p>{oficina}</p>
        <p>{direccion}</p>
      </div>
    </a>
  )
}

CardDirection.propTypes = {
  ciudad: PropTypes.string.isRequired,
  oficina: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

CardDirection.defaultProps = {
  ciudad: 'Ambato',
  oficina: 'Oficina Central',
  direccion: 'Frutillas y Av. Los Guaytambos',
  url: 'https://goo.gl/maps/4GKeJRB2invcY7Dw9'
}


export default CardDirection