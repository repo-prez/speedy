import { useState } from 'react'
import Banner from './Banner'
import MenuPlans from './MenuPlans'
import CardPlan from './CardPlan'

const homeInternet = {
  plan1: {
    title: 'Fibra 200 Megas',
    speed: 200,
    promoDiscount: 20,
    pricePromo: 22.50,
    price: 30,
    extensor: false,
  },
  plan2: {
    title: 'Fibra 250 Megas',
    speed: 250,
    promoDiscount: 25,
    pricePromo: 25.20,
    price: 33.6,
    extensor: false,
  },
  plan3: {
    title: 'Fibra 275 Megas',
    speed: 275,
    promoDiscount: 25,
    pricePromo: 26.25,
    price: 35,
    extensor: true,
  },
  plan4: {
    title: 'Fibra 350 Megas',
    speed: 350,
    promoDiscount: 25,
    pricePromo: 31.5,
    price: 42,
    extensor: false,
  }
}

const businessInternet = {

  plan1: {
    title: 'Fibra Corporativa 150 Megas',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan2: {
    title: 'Fibra Corporativa 150 Megas',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan3: {
    title: 'Fibra Corporativa 150 Megas',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan4: {
    title: 'Fibra Corporativa 150 Megas',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
}

const tvPlans = {

  plan1: {
    title: 'Speedy TV HD',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan2: {
    title: 'Speedy TV',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan3: {
    title: 'Speedy TV',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan4: {
    title: 'Speedy TV',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
}

const dualPlans = {

  plan1: {
    title: 'Speedy Dual Pack',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan2: {
    title: 'Speedy Dual Pack',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan3: {
    title: 'Speedy Dual Pack',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan4: {
    title: 'Speedy Dual Pack',
    speed: 160,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
}

const Products = () => {

  const [activeProduct, setActiveProduct] = useState({
    home: true,
    business: false,
    tv: false,
    dual: false
  })

  // setTimeout(() => {

  //   console.log(window.innerWidth)
  // }, 5000);


  return (
    <div className='relative w-full xl:flex flex-col items-center'>

      <Banner activeProduct={activeProduct} />



      <div className="relative z-20  md:-top-10 flex flex-col lg:items-center w-full ">

        <MenuPlans className='' activeProduct={activeProduct} setActiveProduct={setActiveProduct} />

        <div className={`flex rounded-xl lg:flex-wrap lg:justify-between  overflow-x-scroll no-scrollbar  md:w-full lg:w-10/12 xl:w-8/12 xl:w pl-8 lg:pl-0   ${!activeProduct.home ? 'hidden' : 'flex '}`}>
          <CardPlan planData={homeInternet.plan1} />
          <CardPlan planData={homeInternet.plan2} />
          <CardPlan planData={homeInternet.plan3} />
          <CardPlan planData={homeInternet.plan4} />
        </div>


        <div className={`flex rounded-xl lg:flex-wrap lg:justify-between  overflow-x-scroll no-scrollbar md:w-full   pl-8 lg:px-36   ${!activeProduct.business ? 'hidden' : 'flex '}`}>
          <CardPlan planData={businessInternet.plan1} />
          <CardPlan planData={businessInternet.plan2} />
          <CardPlan planData={businessInternet.plan3} />
          <CardPlan planData={businessInternet.plan4} />
        </div>

        <div className={`flex rounded-xl lg:flex-wrap lg:justify-between  overflow-x-scroll no-scrollbar md:w-full   pl-8 lg:px-36   ${!activeProduct.tv ? 'hidden' : 'flex '}`}>
          <CardPlan planData={tvPlans.plan1} />
          <CardPlan planData={tvPlans.plan2} />
          <CardPlan planData={tvPlans.plan3} />
          <CardPlan planData={tvPlans.plan4} />
        </div>

        <div className={`flex rounded-xl lg:flex-wrap lg:justify-between  overflow-x-scroll no-scrollbar md:w-full   pl-8 lg:px-36   ${!activeProduct.dual ? 'hidden' : 'flex '}`}>
          <CardPlan planData={dualPlans.plan1} />
          <CardPlan planData={dualPlans.plan2} />
          <CardPlan planData={dualPlans.plan3} />
          <CardPlan planData={dualPlans.plan4} />
        </div>





      </div>


    </div>
  )
}

export default Products