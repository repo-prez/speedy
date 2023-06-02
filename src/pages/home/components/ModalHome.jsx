import modalMotoPapi from '../../../assets/img/media/modalMotoPapi.webp'
import svgClose from '../../../assets/icons/svgCloseBlack.svg'
import svgClosePink from '../../../assets/icons/svgClosePink.svg'

import Modal from 'react-modal';

const modalStyles = {
  overlay: { zIndex: 20 },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '90%',
    height: '90%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '30px',
    overflow: 'hidden',
    zIndex: 20
  }

}


const ModalHome = ({ isOpen, setModal }) => {

  const handleCloseModal = () => {
    setModal(false)
  }

  return (

    <Modal
      style={modalStyles}
      isOpen={isOpen}
      ariaHideApp={false}
    >
      <div className='flex flex-col items-center mt-[10rem] sm:mt-[5rem] lg:mt-[1rem] '>

        <div className='w-screen md:w-5/6 lg:w-1/2 lg:p-10 xl:p-10'>

          <button
            className='w-full relative'
            onClick={handleCloseModal}
          >
            <img className={`absolute right-6 -top-14  w-[3rem] object-cover my-2 hover:scale-125 transition duration-150  `} src={svgClosePink} alt="icon" />
            <img className={`absolute right-6 -top-14  w-[3rem] object-cover my-2 hover:scale-125 transition duration-150 hover:opacity-10`} src={svgClose} alt="icon" />
          </button>

          <img className='px-5' src={modalMotoPapi} alt="Moto papi promo" />
          <p className='px-10 text-primary font-bold'>Conoce las <span className='hover:text-secondary cursor-pointer underline'>políticas del concurso</span></p>
        </div>

      </div>
    </Modal>
  )
}

export default ModalHome