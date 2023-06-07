import svgInternetHome from '../../../assets/icons/svgInternetHome.svg'
import svgInternetHomePink from '../../../assets/icons/svgInternetHomePink.svg'
import svgInternetCorporativo from '../../../assets/icons/svgInternetCorporativo.svg'
import svgInternetCorporativoPink from '../../../assets/icons/svgInternetCorporativoPink.svg'


import svgSpeedy from '../../../assets/icons/svgSpeedy.svg'
import svgsvgDualPack from '../../../assets/icons/svgDualPack.svg'




const MenuPlans = ({ activeProduct, setActiveProduct }) => {

  const { home, business, tv, dual } = activeProduct


  return (
    <div className='flex flex-col items-center w-full px-8  lg:px-0 lg:w-11/12 '>


      {/*Menu Plans  */}
      <div className="flex flex-wrap justify-center items-center  text-xs w-full lg:text-lg divide-x-4 divide-white">

        <button
          className={`flex items-center justify-center md:justify-center h-20   bg-background-light text-text ${home && 'font-bold'} 
          w-1/2  border-r-0 rounded-l-3xl 
          md:w-1/2
          lg:w-1/3`}
          onClick={() => setActiveProduct({ home: true, business: false, tv: false, dual: false })}
        >
          {
            !home
              ? <img className='w-[2.5rem] lg:w-[3rem] mx-2' src={svgInternetHome} alt="icon internet home" />
              : <img className='w-[2.5rem] lg:w-[3rem] mx-2' src={svgInternetHomePink} alt="icon internet home" />
          }

          <p className='text-center text-md sm:text-lg lg:text-2xl px-2' >Internet Hogar</p>
        </button>


        <button
          className={`flex items-center justify-center md:justify-center  h-20 bg-background-light text-text ${business && 'font-bold'}
          w-1/2 rounded-r-2xl 
          md:w-1/2 
          lg:w-1/3 lg:rounded-l-none lg:rounded-r-3xl`}
          onClick={() => setActiveProduct({ home: false, business: true, tv: false, dual: false })}
        >
          {
            business
              ? <img className='w-[2.5rem] lg:w-[3rem] mx-2' src={svgInternetCorporativoPink} width={50} alt="icon internet corporativo" />
              : <img className='w-[2.5rem] lg:w-[3rem] mx-2' src={svgInternetCorporativo} width={50} alt="icon internet corporativo" />
          }

          <p className='text-center text-md sm:text-lg px-2 lg:text-2xl'>Internet Corporativo </p>
        </button>

      </div>



    </div>
  )
}

export default MenuPlans