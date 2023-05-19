import svgQuestion from '../../../assets/icons/svgQuestion.svg'
import CardQuestion from './CardQuestion'

const QAndA = () => {

  const questions = [
    {
      question: '¿Cuál es la diferencia entre 5G y WiFi 6?',
      answer: 'La principal diferencia radica en la conexión de dispositivos. Mientras el WiFi 6 está diseñado para soportar muchos dispositivos conectados al mismo tiempo, el 5G sirve para conectar un único dispositivo, aunque se pueda compartir la conexión.'
    },
    {
      question: '¿Cuál es la diferencia entre 5G y WiFi 6?',
      answer: 'La principal diferencia radica en la conexión de dispositivos. Mientras el WiFi 6 está diseñado para soportar muchos dispositivos conectados al mismo tiempo, el 5G sirve para conectar un único dispositivo, aunque se pueda compartir la conexión.'
    },
    {
      question: '¿Cuál es la diferencia entre 5G y WiFi 6?',
      answer: 'La principal diferencia radica en la conexión de dispositivos. Mientras el WiFi 6 está diseñado para soportar muchos dispositivos conectados al mismo tiempo, el 5G sirve para conectar un único dispositivo, aunque se pueda compartir la conexión.'
    },
  ]



  return (
    <div className='flex flex-col items-center w-full'>

      <div className='flex items-center   py-6 w-5/6 lg:w-8/12 xl:w-f'>
        <img className='mr-4 w-[4rem]' src={svgQuestion} alt="" />
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