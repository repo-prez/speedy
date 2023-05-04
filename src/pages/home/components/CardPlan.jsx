import iconConfig from '../../../assets/icons/iconConfig.svg'
import iconRouter from '../../../assets/icons/iconRouter.svg'
import iconTransfer from '../../../assets/icons/iconTransfer.svg'
import iconWiffi from '../../../assets/icons/iconWiffi.svg'

import imgDescuento from '../../../assets/img/media/descuento.png'



const CardPlan = ({ planData }) => {

  const { title, speed, promoDiscount, pricePromo, price, extensor } = planData
  return (
    <div className='flex flex-col items-center  mr-4 my-4 lg:mr-0 md:w-1/3 lg:w-64 xl:w-[17rem]  bg-white  border-2 border-slate-500 rounded-xl '>

      <div className='  w-[15rem] h-16  '>
        <p className='text-start text-2xl  p-4'>Internet <span className='font-extrabold'>{title}</span> </p>
      </div>





      <div className='flex flex-col items-center pt-8 pb-2 justify-center'>
        <p className='text-4xl font-bold text-blue-900'>{`$${pricePromo.toFixed(2)}/`}<span className='text-2xl font-bold text-secondary'>mes</span></p>
      </div>

      {/* <div className='flex justify-center items-center cursor-pointer'>
        <p className='border-2  border-secondary bg-secondary rounded-l-full px-1  text-white'>{`${promoDiscount}% dcto.`}</p>
        <p className=' border-2 border-secondary bg-white rounded-r-full px-1 font-bold'>Oferta Online</p>
      </div> */}

      <img className='lg:w-2/3' src={imgDescuento} alt="" />


      <p className='mt-2'>Por 4 meses, luego  <span className='font-bold'>{`$${price.toFixed(2)}/mes`}</span></p>


      <div className='flex items-center px-12 py-4 w-full  '>
        <img className='' src={iconRouter} width={20} alt="iconTransfer" />
        <p className='mx-2'> Router 4 antenas WI-FI 6</p>
      </div>

      <button className='bg-blue-900 w-5/6 p-3 my-4  rounded-full font-bold text-white text-xl hover:bg-blue-950'>
        Lo quiero
      </button>

      <div className='  divide-y '>

        <div className='flex px-4 py-2  items-start  '>
          <img className='mx-2' src={iconTransfer} width={20} alt="iconTransfer" />
          <div>
            <p>Velocidad simétrica</p>
            <p>Hasta <span className='font-bold' >{`${speed}Mbps`}</span> de subida y de bajada.</p>
          </div>
        </div>


        <div className='flex px-4 py-2  items-start  '>
          <img className='mx-2' src={iconRouter} width={20} alt="iconTransfer" />
          <p>Router principal <span className='font-bold'>incluido</span></p>
        </div>


        <div className='flex px-4 py-2  items-start '>
          <img className='mx-2' src={iconConfig} width={20} alt="iconTransfer" />
          <p>Costo de instalación <span className='font-bold'>$0</span></p>
        </div>

      </div >

    </div >
  )


}

export default CardPlan