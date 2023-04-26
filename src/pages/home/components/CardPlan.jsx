import iconConfig from '../../../assets/icons/iconConfig.svg'
import iconRouter from '../../../assets/icons/iconRouter.svg'
import iconTransfer from '../../../assets/icons/iconTransfer.svg'
import iconWiffi from '../../../assets/icons/iconWiffi.svg'



const CardPlan = ({ planData }) => {

  const { title, speed, promoDiscount, pricePromo, price, extensor } = planData
  return (
    <div className='flex flex-col items-center border-2 m-4  bg-slate-50  border-slate-500 rounded-xl shadow-xl w-4/5 md:w-2/5 lg:w-1/5'>

      <div className=' w-full'>
        <p className='p-3 text-start text-xl w-1/2'>Internet <span className='font-bold'>{title}</span> </p>

        <div className='flex p-3 items-center jus'>
          <img className='mr-3' src={iconRouter} width={30} alt="iconRouter" />
          <p>Router</p>
        </div>
      </div>

      <div className='flex justify-center items-center cursor-pointer'>
        <p className='border-2  border-pink-600 bg-pink-600 rounded-l-full px-1  text-white'>{`${promoDiscount}% dcto.`}</p>
        <p className=' border-2 border-pink-600 bg-white rounded-r-full px-1 font-bold'>Oferta Online</p>
      </div>

      <div className='flex flex-col items-center p-4 justify-center'>
        <p className='text-3xl font-bold text-blue-900'>{`$${pricePromo.toFixed(2)}/mes`}</p>
        <p className=''>Por 4 meses, luego  <span className='font-bold'>{`$${price.toFixed(2)}/mes`}</span></p>
      </div>

      <button className='bg-blue-900 w-5/6 p-3 rounded-full font-bold text-white text-xl hover:bg-blue-950'>
        Lo quiero
      </button>

      <div>

        <div className='flex p-4 items-start border-b-2 mx-2'>
          <img className='mx-2' src={iconTransfer} width={30} alt="iconTransfer" />
          <div>
            <p>Velocidad simétrica</p>
            <p>Hasta <span>{`${speed}Mbps`}</span> de subida y de bajada.</p>
          </div>
        </div>


        <div className='flex p-4 items-start border-b-2 mx-2'>
          <img className='mx-2' src={iconRouter} width={30} alt="iconTransfer" />
          <p>Router principal <span className='font-bold'>incluido</span></p>
        </div>

        <div className='flex p-4 items-start border-b-2 mx-2'>
          <img className='mx-2' src={iconWiffi} width={30} alt="iconTransfer" />
          <p>{extensor ? `Incluye` : `No incluye`} <span className="font-bold">extensor de señal</span></p>
        </div>

        <div className='flex p-4 items-start mx-2'>
          <img className='mx-2' src={iconConfig} width={30} alt="iconTransfer" />
          <p>Costo de instalación <span className='font-bold'>$0</span></p>
        </div>

      </div>

    </div>
  )


}

export default CardPlan