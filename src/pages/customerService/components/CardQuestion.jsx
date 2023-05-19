import { useState } from "react"
import svgDescendingArrow from '../../../assets/icons/svgDescendingArrow.svg'

const CardQuestion = ({ question, answer }) => {

  const [answerVisible, setAnswerVisible] = useState(false)
  return (
    <div className='flex flex-col items-start w-5/6 lg:w-8/12 xl:w-f '>

      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setAnswerVisible(!answerVisible)}

      >
        <p className='text-xl font-bold'>{question}</p>
        <img className={`w-1/12 md:p-3 lg:p-7 mx-4 md:mx-0 cursor-pointer ${!answerVisible ? `rotate-180 animate-spin` : `animate-spin2`}`} src={svgDescendingArrow} alt="icon" />
      </div>

      <p className={`text-lg pb-2 animate__animated animate__faster animate__slideInDown ${!answerVisible ? ` hidden` : ``}`}>{answer}</p>
    </div>
  )
}

export default CardQuestion