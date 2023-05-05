import imgBlog from '../../../assets/img/banners/bannerForm.jpg'
import CardBlog from './CardBlog'

const dataForms = [
  {
    img: imgBlog,
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Speedy',
    hero: 'Speedy, la empresa proveedora de Internet líder en el centro del país, inauguró en febrero',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
  {
    img: imgBlog,
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Speedy',
    hero: 'Speedy, la empresa proveedora de Internet líder en el centro del país, inauguró en febrero',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },
  {
    img: imgBlog,
    date: { day: '12', month: 'Feb', year: '2021' },
    title: 'Speedy',
    hero: 'Speedy, la empresa proveedora de Internet líder en el centro del país, inauguró en febrero',
    description: 'Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.'
  },

]

const Blogs = () => {
  return (

    <div>
      <p className='w-full text-center my-12 text-primary text-4xl font-bold'>Speedy Blog's</p>

      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-between  lg:px-28 items-center my-9'>

        {
          dataForms.map((item, index) => (
            <CardBlog key={index} {...item} />
          ))

        }
      </div>
    </div>
  )
}

export default Blogs