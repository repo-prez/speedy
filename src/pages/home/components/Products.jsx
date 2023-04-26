import { useState } from 'react'
import Banner from './Banner'
import Plans from './Plans'

const Products = () => {

  const [activeProduct, setActiveProduct] = useState({
    home: true,
    business: false,
    tv: false,
    dual: false
  })

  return (
    <>

      <Banner activeProduct={activeProduct} />
      <Plans activeProduct={activeProduct} setActiveProduct={setActiveProduct} />

    </>
  )
}

export default Products