import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'

const ContactPage = () => {
  return (
    <>
      <NavBar />

      <div className='flex flex-col justify-center items-center'>

        <p className='  p-2 m-4 text-center text-4xl border-t-2 border-b-2 border-secondary text-slate-700'>Contactos</p>
      </div>


      <Footer />
    </>
  )
}

export default ContactPage