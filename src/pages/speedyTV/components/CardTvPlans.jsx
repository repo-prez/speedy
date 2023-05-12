import iconTwoUsers from '../../../assets/icons/svgTwoUsers.svg'
import iconDeco from '../../../assets/icons/svgDeco.svg'


const CardTvPlans = ({ title, channels, channelsHd }) => {
  return (
    <div className='bg-white rounded-lg p-4 mb-2 mt-2 mr-4 md:mr-10 '>

      <div className='w-[10rem] md:w-[12rem] lg:w-full'>
        <p>Speedy TV</p>
        <p className='font-bold text-xl text-primary'>{title}</p>
        <p className='text-secondary text-3xl font-bold'>{`${channels} canales`}</p>
        <p className='text-secondary text-xl '>{`Incluye ${channelsHd} en HD`}</p>
        <p>Entel TV es como la televisión tradicional, pero online: ¡La señal llega por internet!</p>
        <p className='font-bold'>Debes tener internet con una velocidad mayor a 30 Mbps de descarga</p>
      </div>

      <div className='flex'>

        <div className='flex justify-between my-4 '>

          <div className='flex flex-col items-center justify-start text-sm w-1/2'>
            <img className='w-1/2 lg:w-1/4' src={iconTwoUsers} alt="icon users" />
            <p>Hasta dos dispositivos simultaneos</p>
          </div>

          <div className='flex flex-col items-center justify-start text-sm w-1/2'>
            <img className='w-1/2 lg:w-1/4' src={iconDeco} alt="icon receptor tv" />
            <p>Receptor TV</p>
          </div>
        </div>

      </div>
    </div>
  )
}

CardTvPlans.defaultProps = {
  title: 'TV Lite',
  channels: '46',
  channelsHd: '10',
}

export default CardTvPlans