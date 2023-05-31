import { useState } from 'react'
import Banner from './Banner'
import MenuPlans from './MenuPlans'
import CardPlan from './CardPlan'

import { homeInternet, businessInternet, tvPlans, dualPlans } from '../../../data/internetHomePrices'


const Products = () => {

  const [activeProduct, setActiveProduct] = useState({
    home: true,
    business: false,
    tv: false,
    dual: false
  })

  return (
    <div className='relative w-full xl:flex flex-col items-center bg-c  '>

      <Banner activeProduct={activeProduct} />



      <div className="relative z-20  md:-top-10 flex flex-col lg:items-center  xl:w-8/12 ">

        <MenuPlans className='' activeProduct={activeProduct} setActiveProduct={setActiveProduct} />

        <div className={`flex rounded-xl  lg:justify-between  overflow-x-scroll no-scrollbar  md:w-full lg:w-10/12 xl:w-full  pl-8 lg:pl-0 ${!activeProduct.home ? 'hidden' : 'flex '}`}>
          <CardPlan planData={homeInternet.plan1} />
          <CardPlan planData={homeInternet.plan2} />
          <CardPlan planData={homeInternet.plan3} />
          <CardPlan planData={homeInternet.plan4} />
          <CardPlan planData={homeInternet.plan5} />
          <CardPlan planData={homeInternet.plan6} />
        </div>

        <div className={`flex rounded-xl lg:justify-between  overflow-x-scroll no-scrollbar  md:w-full lg:w-10/12 xl:w-full  pl-8 lg:pl-0  ${!activeProduct.business ? 'hidden' : 'flex '}`}>
          <CardPlan planData={businessInternet.plan1} />
          <CardPlan planData={businessInternet.plan2} />
          <CardPlan planData={businessInternet.plan3} />
          <CardPlan planData={businessInternet.plan4} />
        </div>

        <div className={`flex rounded-xl lg:justify-between  overflow-x-scroll no-scrollbar  md:w-full lg:w-10/12 xl:w-full pl-8 lg:pl-0  ${!activeProduct.tv ? 'hidden' : 'flex '}`}>
          <CardPlan planData={tvPlans.plan1} />
          <CardPlan planData={tvPlans.plan2} />
          <CardPlan planData={tvPlans.plan3} />
          <CardPlan planData={tvPlans.plan4} />
        </div>

        <div className={`flex rounded-xl lg:justify-between  overflow-x-scroll no-scrollbar  md:w-full lg:w-10/12 xl:w-full pl-8 lg:pl-0  ${!activeProduct.dual ? 'hidden' : 'flex '}`}>
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