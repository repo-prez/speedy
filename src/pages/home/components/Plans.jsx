import CardPlan from "./CardPlan"
import MenuPlans from "./MenuPlans"


const homeInternet = {
  plan1: {
    title: 'Fibra 150 Megas',
    speed: 150,
    promoDiscount: 20,
    pricePromo: 22.40,
    price: 26.48,
    extensor: false,
  },
  plan2: {
    title: 'Fibra 200 Megas',
    speed: 200,
    promoDiscount: 25,
    pricePromo: 22.50,
    price: 28.13,
    extensor: false,
  },
  plan3: {
    title: 'Fibra 250 Megas',
    speed: 250,
    promoDiscount: 25,
    pricePromo: 25.20,
    price: 31.50,
    extensor: true,
  },
  plan4: {
    title: 'Fibra 250 Megas',
    speed: 250,
    promoDiscount: 25,
    pricePromo: 25.20,
    price: 31.50,
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

const Plans = ({ activeProduct, setActiveProduct }) => {

  const { home, business, tv, dual } = activeProduct

  return (
    <div className="">

      <MenuPlans activeProduct={activeProduct} setActiveProduct={setActiveProduct} />

      <div className={`flex flex-wrap justify-center ${!home ? 'hidden' : 'flex'}`}>
        <CardPlan planData={homeInternet.plan1} />
        <CardPlan planData={homeInternet.plan2} />
        <CardPlan planData={homeInternet.plan3} />
        <CardPlan planData={homeInternet.plan4} />
      </div>

      <div className={`flex flex-wrap justify-center ${!business ? 'hidden' : 'flex'}`}>
        <CardPlan planData={businessInternet.plan1} />
        <CardPlan planData={businessInternet.plan2} />
        <CardPlan planData={businessInternet.plan3} />
        <CardPlan planData={businessInternet.plan4} />
      </div>

      <div className={`flex flex-wrap justify-center ${!tv ? 'hidden' : 'flex'}`}>
        <CardPlan planData={tvPlans.plan1} />
        <CardPlan planData={tvPlans.plan2} />
        <CardPlan planData={tvPlans.plan3} />
        <CardPlan planData={tvPlans.plan4} />
      </div>

      <div className={`flex flex-wrap justify-center ${!dual ? 'hidden' : 'flex'}`}>
        <CardPlan planData={dualPlans.plan1} />
        <CardPlan planData={dualPlans.plan2} />
        <CardPlan planData={dualPlans.plan3} />
        <CardPlan planData={dualPlans.plan4} />
      </div>





    </div>
  )
}

export default Plans