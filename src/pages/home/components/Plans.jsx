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


const Plans = () => {
  return (
    <div>

      <MenuPlans />

      <div className="flex flex-wrap justify-center">
        <CardPlan planData={homeInternet.plan1} />
        <CardPlan planData={homeInternet.plan2} />
        <CardPlan planData={homeInternet.plan3} />
        <CardPlan planData={homeInternet.plan4} />

      </div>




    </div>
  )
}

export default Plans