import imgBlog from '../../../assets/img/banners/bannerForm.webp'
import CardBlog from './CardBlog'


const dataForms = [
  {
    img: 'https://www.zoostock.com/wp-content/uploads/2021/04/WiFi6E.jpg',
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Wiffi 6',
    hero: 'La nueva era de la conectividad inalámbrica con velocidades más rápidas y mayor capacidad de dispositivos.',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
  {
    img: 'https://www.cablesyredes.com/wp-content/uploads/2021/01/Blog-02-01-1170x658.jpg',
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Fibra Óptica',
    hero: 'Conexión ultrarrápida y confiable para una experiencia de Internet sin precedentes.',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
  {
    img: 'https://www.redeszone.net/app/uploads-redeszone.net/2022/07/aparatos-mejor-wifi.jpg',
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Mejora tu conexión',
    hero: 'Mejora tu conexión de Internet en casa y disfruta de velocidades rápidas y una experiencia en línea fluida',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
  {
    img: 'https://media.minutouno.com/p/da8f500a5e740a17d6f2d06f766b4074/adjuntos/150/imagenes/025/866/0025866177/610x0/smart/hacker.png',
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Protege tu información',
    hero: 'Cómo salvaguardar tu información personal en el mundo digital.',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
  {
    img: 'https://www.iphe.gob.pa/content/post/principal/pri_b08dd16716360d67e5685022914386df-2020-06-18-10-57-15.jpeg',
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Internet para teletrabajo',
    hero: 'optimiza tu productividad y mantén la colaboración en línea.',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
]


const Blogs = () => {
  return (

    <div className='relative w-full xl:flex flex flex-col items-center ' >

      <p className=' text-center my-12 text-primary text-4xl font-bold'>Speedy Blog's</p>

      <div className='flex lg:w-10/12 rounded-xl mb-10 w-full xl:w-8/12 overflow-x-scroll no-scrollbar lg:hidden'>
        {dataForms.map((item, index) => (<CardBlog key={index} {...item} />))}
      </div>

      {/* Desktop Blogs */}
      <div className='lg:w-10/12 xl:w-8/12 sm:hidden lg:flex flex-wrap justify-between'>

        <div
          className='flex flex-col justify-between w-7/12 h-[22rem] mr-4 mb-4'
          style={{ backgroundImage: `url(${dataForms[0].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataForms[0].date.day]}</p>
            <p className='text-center text-base'>{[dataForms[0].date.month]}</p>
            <p className='text-center text-base'>{[dataForms[0].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>WiFi-6</p>
            <p className='font-light'>
              La nueva era de la conectividad inalámbrica con velocidades más rápidas y mayor capacidad de dispositivos.
            </p>
          </div>
        </div>


        <div
          className='flex flex-col justify-between w-4/12 h-[22rem]'
          style={{ backgroundImage: `url(${dataForms[1].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataForms[1].date.day]}</p>
            <p className='text-center text-base'>{[dataForms[1].date.month]}</p>
            <p className='text-center text-base'>{[dataForms[1].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30'>
            <p className='font-bold' >Fibra Óptica</p>
            <p className='font-light'>
              Conexión ultrarrápida y confiable para una experiencia de Internet sin precedentes
            </p>
          </div>
        </div>

        <div
          className='flex flex-col justify-between w-[20rem] h-[22rem]  mb-4'
          style={{ backgroundImage: `url(${dataForms[2].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataForms[2].date.day]}</p>
            <p className='text-center text-base'>{[dataForms[2].date.month]}</p>
            <p className='text-center text-base'>{[dataForms[2].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>Mejorar tu conexión a internet</p>
            <p className='font-light'>
              Mejora tu conexión de Internet en casa y disfruta de velocidades rápidas y una experiencia en línea fluida
            </p>
          </div>
        </div>

        <div
          className='flex flex-col justify-between w-[20rem] h-[22rem] mb-4'
          style={{ backgroundImage: `url(${dataForms[3].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataForms[3].date.day]}</p>
            <p className='text-center text-base'>{[dataForms[3].date.month]}</p>
            <p className='text-center text-base'>{[dataForms[3].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'> Protege tu información personal en la red</p>
            <p className='font-light'>
              Cómo salvaguardar tu información personal en el mundo digital.
            </p>
          </div>
        </div>

        <div
          className='flex flex-col justify-between w-4/12 h-[22rem]  mb-4'
          style={{ backgroundImage: `url(${dataForms[4].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='bg-secondary w-[4rem] h-[6rem] text-white  text-xl'>
            <p className='text-center text-4xl font-bold'>{[dataForms[4].date.day]}</p>
            <p className='text-center text-base'>{[dataForms[4].date.month]}</p>
            <p className='text-center text-base'>{[dataForms[4].date.year]}</p>
          </div>

          <div className='text-white m-2 p-4 text-xl rounded-lg backdrop-blur-sm bg-white/30 '>
            <p className='font-bold'>Internet para trabajo remoto</p>
            <p className='font-light'>Optimiza tu productividad y mantén la colaboración en línea.</p>
          </div>
        </div>










      </div>

    </div>
  )
}

export default Blogs