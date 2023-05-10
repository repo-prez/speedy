import imgBlog from '../../../assets/img/banners/bannerForm.jpg'
import CardBlog from './CardBlog'
import CardPlan from './CardPlan'

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

    <div className='relative w-full xl:flex flex flex-col items-center ' >


      <p className=' text-center my-12 text-primary text-4xl font-bold'>Speedy Blog's</p>



      <div className='flex 
       lg:w-10/12 rounded-xl mb-10 w-full xl:w-8/12 overflow-x-scroll no-scrollbar'>
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