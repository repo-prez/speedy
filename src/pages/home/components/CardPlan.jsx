import iconInstallation from '../../../assets/icons/iconInstallation.svg'
import iconRouter from '../../../assets/icons/iconRouter.svg'
import iconRouter2 from '../../../assets/icons/iconRouter2.svg'
import iconTransfer from '../../../assets/icons/iconTransfer.svg'

import iconWiffi from '../../../assets/icons/iconWiffi.svg'
import iconDescuento from '../../../assets/icons/descuento.svg'

import imgDescuento from '../../../assets/img/media/descuento.png'



const CardPlan = ({ planData }) => {

  const { title, speed, promoDiscount, pricePromo, price, extensor } = planData

  const decimals = pricePromo.toFixed(2).toString().split('.')

  return (
    <div className='flex flex-col items-center  mr-4 ml-1 my-4  md:w-1/3 lg:w-64 xxl:w-[17rem] bg-background-light rounded-xl  hover:shadow-[0.2px_0.2px_5px_0.2px] hover:shadow-secondary  duration-300'>

      <div className='w-[15rem] h-14 leading-none '>
        <p className='text-center text-lg pt-4 leading-none ' >Internet <span className=''>{title}</span> </p>
        <p className='text-center text-[2.5rem] text-text font-extrabold tracking-tighter'>{speed} MEGAS</p>
      </div>

      <div className='flex w-full justify-center items-center leading-none  mt-10 border-t-[2px] border-white border-dashed'>
        <p className='text-secondary font-bold text-[2.5rem]'>$</p>
        <p className='text-text font-extrabold text-[5rem]'>{pricePromo.toFixed(0)}</p>
        <div className='leading-4'>
          <p className='text-text font-bold text-[2rem]'>.{decimals[1]}</p>
          <p className='text-secondary font-bold'>mensual</p>
          <p className=''>x 4 meses</p>
        </div>
      </div>


      <div className='flex justify-center items-center cursor-pointer '>
        <div className=' leading-3 border-2 border-secondary bg-secondary rounded-bl-lg px-1  text-white py-[1px]'>
          <p className='text-center font-bold' >{`${promoDiscount}%`}</p>
          <p className='text-center text-[0.7rem]' >DESC.</p>
        </div>
        <p className=' h-full border-2 border-secondary bg-white rounded-tr-lg px-1 font-bold text-text'>Oferta Online</p>
      </div>


      <div className='flex items-end mt-2 '>
        <img className='m-1' src={iconRouter2} width={20} alt="iconTransfer" />
        <div>
          <p >Luego<span className='font-bold'>{`$${price.toFixed(2)}/mes`}</span></p>
          <p > Router 4 antenas WI-FI 6</p>
        </div>
      </div>



      <a
        className='bg-text w-5/6 p-3 my-4  rounded-full font-bold text-center text-white text-xl hover:bg-blue-950'
        href={`https://api.whatsapp.com/send/?phone=593994505050&text=Hola+me+interesa+en+plan+de+${speed}+Mb&type=phone_number&app_absent=0`}
        target='_blank' rel="noreferrer"
      >
        Más información
      </a>

      <div className='pl-4 border-t-[2px] border-white border-dashed'>

        <div className='flex items-center py-2'>
          <img className='m-1' src={iconTransfer} width={20} alt="iconTransfer" />
          <div className='leading-4'>
            <p >Velocidad simétrica</p>
            <p >Hasta <span className='font-bold' >{`${speed}Mbps`}</span> de subida y de bajada.</p>
          </div>
        </div>


        <div className='flex py-2  items-start  '>
          <img className='m-1' src={iconRouter} width={20} alt="iconTransfer" />
          <p >Router principal <span className='font-bold'>incluido</span></p>
        </div>


        <div className='flex  py-2 mb-4 items-start '>
          <img className='m-1' src={iconInstallation} width={20} alt="iconTransfer" />
          <p >Costo de instalación <span className='font-bold'>$0</span></p>
        </div>

      </div >

    </div >
  )


}

export default CardPlan