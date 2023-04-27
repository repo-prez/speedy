import Footer from "../../ui/components/Footer"
import NavBar from "../../ui/components/NavBar"

import personalImage from '../../assets/img/media/personalImage.jpeg'
import svgBuilding from '../../assets/icons/svgBuilding.svg'
import svgNetworks from '../../assets/icons/svgNetwork.svg'
import CardQuality from "./components/CardQuality"


const qualities = [
  {
    title: 'Actitud de Servicio',
    description: 'Gracias a nuestro trabajo en equipo, brindar servicio de calidad a nuestros clientes.'
  },
  {
    title: 'Actitud de Servicio',
    description: 'Estamos permanentemente capacitándonos con las últimas tecnologías para así brindar a nuestros clientes la mejor señal de internet.'
  },
  {
    title: 'Transparencia',
    description: 'Ser claros en la información de nuestros productos y servicios para generar confianza en nuestros clientes.'
  },
  {
    title: 'Soporte Técnico',
    description: 'Speedy dispone de un gran personal técnico capacitado para dar solución a cada una de tus dudas o problemas que se presente en tu servicio, en el menor tiempo posible.'
  },
  {
    title: 'Equipos',
    description: 'Los equipos que son instalados en los planes home como empresariales son de última tecnología así brindamos un servicio de calidad a nuestros clientes.'
  },
  {
    title: 'Fibra Óptica',
    description: 'Hoy en día las conexiones con fibra óptica han ayudado a dar un paso muy importante en las comunicaciones es por eso que Speedy está ofreciendo planes con fibra óptica para mayor velocidad.'
  },

]


const UsPage = () => {
  return (
    <div>
      <NavBar />
      <p className="text-center p-12 bg-green-400">Nosotros aqui va un banner con la imagen de nosotros</p>

      {/* Nosotros */}
      <div className="flex flex-col lg:flex-row items-center py-4 px-10">
        <img className="rounded-xl m-4 w-full lg:w-1/2 " src={personalImage} alt="personalImage" />
        <div className=" lg:w-1/2">
          <p className="text-4xl text-center mb-8 ">¿Quiénes Somos?</p>
          <p className="text-justify"> Somos una empresa Ambateña con más de 15 años de experiencia, brindando servicios de internet y transmisión de datos de alta capacidad y velocidad, brindando un servicio estable, seguro y rápido con nuestra red de fibra óptica satisfaciendo así los requerimientos de la población. </p>
        </div>
      </div>

      {/* Misión Visión */}
      <div className="flex flex-col md:flex-row py-4 px-12    ">

        <div className="flex flex-col items-center shadow-xl  my-12 md:w-1/2  md:mx-4">
          <img className="w-16" src={svgBuilding} alt="" />
          <p className="text-4xl text-center font-bold p-4">Misión</p>
          <p className="p-4">Brindar soluciones integrales de telecomunicaciones con la más alta tecnología con talento humano apasionado por su trabajo enfocado a satisfacer las necesidades y expectativas de nuestros clientes.</p>
        </div>

        <div className="flex flex-col items-center shadow-xl my-12  md:w-1/2  md:mx-4">
          <img className="w-16" src={svgNetworks} alt="" />
          <p className="text-4xl text-center font-bold p-4">Visión</p>
          <p className="p-4">Ser una compañía de conocimiento y entretenimiento digital en la Zona Centro del Ecuador, gracias a nuestras soluciones innovadoras de productos y servicios, para así lograr ser reconocidos por nuestro servicio de calidad humana y profesional.</p>
        </div>

      </div>


      {/* Cualidades */}

      <div className="flex flex-col md:flex-row md:flex-wrap my-4 px-12">

        {
          qualities.map((quality, index) => (
            <CardQuality key={index} title={quality.title} description={quality.description} />
          ))
        }

      </div>





      <Footer />
    </div>
  )
}

export default UsPage