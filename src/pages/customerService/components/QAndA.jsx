import svgQuestion from '../../../assets/icons/svgQuestion.svg'
import CardQuestion from './CardQuestion'

const QAndA = () => {

  const questions = [
    {
      question: '¿Que es fibra óptica?',
      answer: 'Es un medio de transmisión empleado habitualmente en redes de datos; un hilo muy fino de material transparente, vidrio o materiales plásticos, por el que se envían pulsos de luz que representan los datos a transmitir.'
    },
    {
      question: '¿Que es un terminal de Fibra u ONT?',
      answer: 'Es un medio de transmisión empleado habitualmente en redes de datos; un hilo muy fino de material transparente, vidrio o materiales plásticos, por el que se envían pulsos de luz que representan los datos a transmitir. La fuente de luz puede ser láser o un led.'
    },
    {
      question: '¿Qué factores pueden afectar a la velocidad del servicio de Internet?',
      answer: 'Existen ciertos factores que pueden afectar la calidad de tu conexión; por ejemplo: virus, software malicioso o estado de tu computador ya que éste puede incumplir con las condiciones mínimas de operación detalladas en tu contrato.'
    },
    {
      question: '¿Qué es un extensor WiFi?',
      answer: 'Un extensor WiFi es un dispositivo que toma la señal de tu router y la retransmite, con el fin de ampliar su cobertura y poder llegar a todos los rincones de tu hogar.'
    },
    {
      question: '¿Cuándo utilizar un extensor wifi?',
      answer: 'Te recomendamos que arriendes un extensor si tu hogar cuenta con más de 1 piso y/o 3 o más habitaciones.De todas formas, nuestro técnico durante la instalación puede sugerirte uno si lo consideras necesario.'
    },
  ]



  return (
    <div className='flex flex-col items-center w-full'>

      <div className='flex items-center   py-6 w-5/6 lg:w-8/12 xl:w-f'>
        <img className='mr-4 w-[4rem]' src={svgQuestion} alt="icon" />
        <p className='text-xl font-bold'>Preguntas Frecuentes</p>
      </div>


      <div className='w-full flex flex-col items-center divide-y divide-slate-500'>
        {
          questions.map((question, index) => (
            <CardQuestion key={index} question={question.question} answer={question.answer} />
          ))
        }
      </div>


    </div>
  )
}

export default QAndA