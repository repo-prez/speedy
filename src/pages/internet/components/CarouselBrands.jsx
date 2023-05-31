import { useEffect, useState } from 'react'


const BrandContainer = ({ img }) => {
  return (
    <div className={` m-2 transition-opacity duration-1000 `}>
      <img src={img} alt="Imagen de Marca" />
    </div>
  )
}

const CarouselBrands = ({ images }) => {

  const limit = images.length

  const [currentBrand, setCurrentBrand] = useState(0)

  useEffect(() => {

    setTimeout(() => {
      if (currentBrand < limit - 5) {
        setCurrentBrand(currentBrand + 1)
      } else {
        setCurrentBrand(0)
      }
    }, 3000);
  }, [currentBrand]);

  return (
    <div>

      {/* sm 2 Brands for screen */}
      <div className='relative flex justify-center md:hidden '>
        <BrandContainer img={images[currentBrand]} />
        <BrandContainer img={images[currentBrand + 1]} />
        <button
          onClick={() => {
            currentBrand < limit - 2 && setCurrentBrand(currentBrand + 1)
            currentBrand === limit - 2 && setCurrentBrand(0)
          }}
          className='absolute text-3xl font-extrabold top-1/3 right-0 '>{`>`}</button>

        <button
          onClick={() => {
            currentBrand > 0 && setCurrentBrand(currentBrand - 1)
            currentBrand === 0 && setCurrentBrand(limit - 2)
          }}
          className='absolute text-3xl font-extrabold top-1/3 left-0 '>{`<`}</button>
      </div>

      {/* md 3 Brands for screen */}
      <div className='relative justify-center sm:hidden md:flex lg:hidden '>
        <BrandContainer img={images[currentBrand]} />
        <BrandContainer img={images[currentBrand + 1]} />
        <BrandContainer img={images[currentBrand + 2]} />
        <button

          onClick={() => {
            currentBrand < limit - 3 && setCurrentBrand(currentBrand + 1)
            currentBrand === limit - 3 && setCurrentBrand(0)
          }}
          className='absolute text-3xl font-extrabold top-1/3 right-0 '>{`>`}</button>

        <button
          onClick={() => {
            currentBrand > 0 && setCurrentBrand(currentBrand - 1)
            currentBrand === 0 && setCurrentBrand(limit - 3)
          }}
          className='absolute text-3xl font-extrabold top-1/3 left-0 '>{`<`}</button>
      </div>


      {/* lg 5 Brands for screen */}
      <div className='relative justify-center sm:hidden lg:flex '>
        <BrandContainer img={images[currentBrand]} />
        <BrandContainer img={images[currentBrand + 1]} />
        <BrandContainer img={images[currentBrand + 2]} />
        <BrandContainer img={images[currentBrand + 3]} />
        <BrandContainer img={images[currentBrand + 4]} />

        <button

          onClick={() => {
            currentBrand < limit - 5 && setCurrentBrand(currentBrand + 1)
            currentBrand === limit - 5 && setCurrentBrand(0)
          }}
          className='absolute text-3xl font-bold top-1/3 right-0 '>{`>`}</button>

        <button
          onClick={() => {
            currentBrand > 0 && setCurrentBrand(currentBrand - 1)
            currentBrand === 0 && setCurrentBrand(limit - 5)
          }}
          className='absolute text-3xl font-bold top-1/3 left-0 '>{`<`}</button>

      </div>
    </div>
  )
}

export default CarouselBrands