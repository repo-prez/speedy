import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import CardDirection from './components/CardDirection'

import svgMail from '../../assets/icons/svgMail.svg'
import svgPhone from '../../assets/icons/svgPhone.svg'
import svgWhatsapp from '../../assets/icons/svgWhatsappColored.svg'

import { Helmet } from 'react-helmet'

const oficinas = [
  {
    ciudad: 'Ambato',
    oficina: 'Oficina Central',
    direccion: 'Frutillas y Av. Los Guaytambos',
    url: 'https://goo.gl/maps/4GKeJRB2invcY7Dw9'
  },
  {
    ciudad: 'Ambato',
    oficina: 'Oficina 2',
    direccion: 'Quito y Sucre (esquina)',
    url: 'https://goo.gl/maps/4UYXLt1NVUxBAH6HA'
  },
  {
    ciudad: 'Ambato',
    oficina: 'Oficina 3',
    direccion: 'Mall de los Andes',
    url: 'https://goo.gl/maps/nEP7bCHqcND8NhDV8'
  },
  {
    ciudad: 'Latacunga',
    oficina: 'Agencia',
    direccion: 'Belisario Quevedo y Felix Valencia',
    url: ''
  },
  {
    ciudad: 'Latacunga',
    oficina: 'Maltería Plaza',
    direccion: 'Isla Direct TV',
    url: ''
  },
  {
    ciudad: 'Riobamba',
    oficina: 'Agencia',
    direccion: 'Av. Daniel Léon Borja y Jacinto González',
    url: ''
  },
  {
    ciudad: 'Riobamba',
    oficina: 'Multiplaza',
    direccion: 'Av. Lizarzauru y Saboya (Isla Directv)',
    url: ''
  },
  {
    ciudad: 'Puyo',
    oficina: 'Agencia',
    direccion: 'Av. Alberto Zambrano y Jaime Roldós Aguilera (esquina)',
    url: ''
  },
  {
    ciudad: 'Tena',
    oficina: 'Agencia',
    direccion: 'Av. 15 de Noviembre y Av. Eloy Alfaro',
    url: ''
  },
  {
    ciudad: 'AROSEMENA TOLA',
    oficina: 'Agencia',
    direccion: 'Troncal Amazónica entre Imbabura y Carchi',
    url: ''
  },
]

const ContactPage = () => {
  return (
    <>
      <Helmet >
        <html lang="es" />
        <title>Speedy Contacto</title>
        <meta title='Speedy | Contacto' />
        <meta name="description" content="Speedy, ponte en contacto con cualquiera de nuestras sucursales." />
        <meta name="author" content="Prez by Célimo Constante" />
      </Helmet>


      <NavBar />

      <div className='flex flex-col justify-center items-center bg-slate-200'>

        <p className='  p-2 m-4 text-center text-4xl border-t-2 border-b-2 border-secondary text-slate-700'>Oficinas</p>

        <div className='flex flex-wrap justify-start lg:justify-center px-8 '>
          {
            oficinas.map((oficina, index) => (
              <CardDirection key={index} {...oficina} />
            ))
          }
        </div>

        <div>

          <div className='p-4'>

            <div className='flex items-start py-3'>
              <img className='mx-2' width={50} src={svgMail} alt="icon mail" />
              <div>
                <p className='font-bold text-lg'>Escríbenos a nuestro e-mail</p>
                <p className='text-slate-600'>servicioalcliente@speedy.com.ec</p>
              </div>
            </div>

            <div className='flex items-start py-3'>
              <img className='mx-2' width={50} src={svgPhone} alt="icon phone" />
              <div>
                <p className='font-bold text-lg'>Llámanos</p>
                <p className='text-slate-600'>☎️ (02) 4 700 600</p>
                <p className='text-slate-600'>📲 0994 50 50 50</p>
              </div>
            </div>


            <a
              href="https://walink.co/834871"
              className='flex items-start py-3'
            >
              <img className='mx-2' width={50} src={svgWhatsapp} alt="icon whatsapp" />
              <div>
                <p className='font-bold text-lg'>WhatsApp</p>
                <p className='text-slate-600'>Escríbenos</p>
              </div>
            </a>

            <div>


            </div>



          </div>

          <div>

          </div>


        </div>

      </div>


      <Footer />
    </>
  )
}

export default ContactPage