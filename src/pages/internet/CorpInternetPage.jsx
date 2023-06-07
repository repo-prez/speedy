import { useContext, useEffect, useState } from 'react'
import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'

import banner from '../../assets/img/banners/bannerCorporativo.webp'
import heroCorp from '../../assets/img/banners/heroCorp.webp'

import brand1 from '../../assets/img/brands/ambato-logos-1.png'
import brand2 from '../../assets/img/brands/ambato-logos-2.png'
import brand3 from '../../assets/img/brands/ambato-logos-3.png'
import brand4 from '../../assets/img/brands/ambato-logos-4.png'
import brand5 from '../../assets/img/brands/ambato-logos-5.png'
import brand6 from '../../assets/img/brands/ambato-logos-6.png'
import brand7 from '../../assets/img/brands/ambato-logos-7.png'
import brand8 from '../../assets/img/brands/ambato-logos-8.png'
import brand9 from '../../assets/img/brands/ambato-logos-9.png'
import brand10 from '../../assets/img/brands/ambato-logos-10.png'
import brand11 from '../../assets/img/brands/ambato-logos-11.png'
import brand12 from '../../assets/img/brands/ambato-logos-12.png'
import brand13 from '../../assets/img/brands/ambato-logos-13.png'
import brand14 from '../../assets/img/brands/ambato-logos-14.png'

import CarouselBrand from './components/CarouselBrands'
import { AppContext } from '../../context/AppContext'
import { Helmet } from 'react-helmet'


const CorpInternetPage = () => {

  const { filterHome } = useContext(AppContext)
  const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14]

  return (
    <>
      <NavBar />


      <Helmet >
        <html lang="es" />
        <title>Internet Corporativo</title>
        <meta title='Speedy | Internet sin límites' />
        <meta name="description" content="Speedy, la empresa proveedora de Internet líder en el centro del país." />
        <meta name="author" content="Prez by Célimo Constante" />
      </Helmet>

      {filterHome && <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`} />}

      <img className='object-cover h-[330px] w-auto ' src={banner} alt="Banner internet corporativo" />

      <div className='px-8 flex flex-col items-center'>

        {/* Hero */}
        <div className='my-8 lg:flex lg:items-center lg:w-10/12 xxl:w-8/12'>

          <div className='lg:w-1/2'>
            <h1 className='text-4xl text-primary'>Internet de fibra óptica dedicado y seguro para tu Empresa.</h1>
            <p className='my-2 md:text-xl'>¿Necesitas Internet para tu empresa?</p>
            <p className='my-2 md:text-xl'>Se parte de las empresas que han confiando en la seguridad y calidad de servicio que Speedy dispone para ti</p>
          </div>
          <img className='lg:w-1/2' src={heroCorp} alt="Internet Corporativo" />

        </div>


        {/* Brands */}
        <div className='flex-col items-center lg:flex lg:w-10/12 xxl:w-8/12'>
          <h1 className='text-4xl text-primary'>Empresas que confían en Speedy Internet.</h1>
          <CarouselBrand images={images} />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default CorpInternetPage