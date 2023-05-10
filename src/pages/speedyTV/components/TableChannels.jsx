import { useState } from 'react'
import svgMovies from '../../../assets/icons/svgMovies.svg'
import disneyJrLogo from '../../../assets/img/tv/disneyJr.png'

const channels = [
  {
    number: 5,
    name: 'Disney Jr',
    hd: true,
    lite: true,
    img: disneyJrLogo,
    category: '1',
  },
  {
    number: 4,
    name: 'Disney Jr',
    hd: false,
    lite: false,
    img: disneyJrLogo,
    category: '2',
  },
  {
    number: 239,
    name: 'Disney Jr',
    hd: true,
    lite: false,
    img: disneyJrLogo,
    category: '1',
  },
  {
    number: 5,
    name: 'Disney Jr',
    hd: true,
    lite: true,
    img: disneyJrLogo,
    category: '3',
  },
  {
    number: 7,
    name: 'Disney Jr',
    hd: true,
    lite: false,
    img: disneyJrLogo,
    category: '4',
  },
  {
    number: 1,
    name: 'Disney Jr',
    hd: true,
    lite: false,
    img: disneyJrLogo,
    category: '4',
  },
  {
    number: 78,
    name: 'Disney Jr',
    hd: true,
    lite: false,
    img: disneyJrLogo,
    category: '5',
  },
  {
    number: 90,
    name: 'Disney Jr',
    hd: true,
    lite: true,
    img: disneyJrLogo,
    category: '5',
  },
  {
    number: 655,
    name: 'Disney Jr',
    hd: true,
    lite: false,
    img: disneyJrLogo,
    category: '5',
  },

]



const TableChannels = () => {

  const [category, setCategory] = useState('') // '' | 'movies' | 'sports' | 'kids' | 'news' | 'premium' | 'international'


  return (
    <div className='m-8 bg-white rounded-xl shadow-2xl'>

      {/* Menu Channels */}
      <div className='flex  overflow-x-scroll'>

        <button
          className={`px-4 my-4 flex flex-col items-center border-b-4 ${category === '' ? 'text-secondary font-bold border-secondary ease-in' : 'text-slate-600'}`}
          onClick={() => setCategory('')}
        >
          <img className='w-10 text-center' src={svgMovies} alt="" />
          <p>Películas</p>
        </button>

        <button
          className={`px-4 my-4 flex flex-col items-center border-b-4 ${category === '1' ? 'text-secondary font-bold border-secondary ease-in' : 'text-slate-600'}`}
          onClick={() => setCategory('1')}
        >
          <img className='w-10 text-center' src={svgMovies} alt="" />
          <p>Películas</p>
        </button>

        <button
          className={`px-4 my-4 flex flex-col items-center border-b-4 ${category === '2' ? 'text-secondary font-bold border-secondary ease-in' : 'text-slate-600'}`}
          onClick={() => setCategory('2')}
        >
          <img className='w-10 text-center' src={svgMovies} alt="" />
          <p>Películas</p>
        </button>

        <button
          className={`px-4 my-4 flex flex-col items-center border-b-4 ${category === '3' ? 'text-secondary font-bold border-secondary ease-in' : 'text-slate-600'}`}
          onClick={() => setCategory('3')}
        >
          <img className='w-10 text-center' src={svgMovies} alt="" />
          <p>Películas</p>
        </button>

        <button
          className={`px-4 my-4 flex flex-col items-center border-b-4 ${category === '4' ? 'text-secondary font-bold border-secondary ease-in' : 'text-slate-600'}`}
          onClick={() => setCategory('4')}
        >
          <img className='w-10 text-center' src={svgMovies} alt="" />
          <p>Películas</p>
        </button>

        <button
          className={`px-4 my-4 flex flex-col items-center border-b-4 ${category === '5' ? 'text-secondary font-bold border-secondary ease-in' : 'text-slate-600'}`}
          onClick={() => setCategory('5')}
        >
          <img className='w-10 text-center' src={svgMovies} alt="" />
          <p>Películas</p>
        </button>

      </div>



      <div className='flex w-full'>
        <p className=' bg-secondary py-4 text-lg text-center font-bold text-white w-1/2'>SpedyTV Lite (50)</p>
        <p className='bg-secondary py-4 text-lg text-center font-bold text-white w-1/2' > SpedyTV Full (100)</p>
      </div>


      <div className='flex justify-between divide-x overflow-y-scroll no-scrollbar h-[30rem]'>

        <div className=' w-1/2'>
          {
            channels.filter(channel => channel.category === category || category === '').map((channel, index) => (
              <div key={index} className='flex flex-col items-center p-4' >
                <img className={`w-2/4 ${channel.lite ? `grayscale` : ``}`} src={channel.img} alt="Logo Tv Channel" />
                <p className={`text-sm ${channel.lite && `line-through`}  `}>
                  <span className='font-bold'>{channel.number}</span>
                  {` ${channel.name} `}
                  <span className={`font-bold ${!channel.hd && `hidden`}`}>HD</span>
                </p>
              </div>
            ))
          }
        </div>

        <div className='w-1/2'>
          {
            channels.filter(channel => channel.category === category || category === '').map((channel, index) => (
              <div key={index} className='flex flex-col items-center p-4'>
                <img className={`w-2/4 `} src={channel.img} alt="Logo Tv Channel" />
                <p className={`text-sm `}>
                  <span className='font-bold'>{channel.number}</span>
                  {` ${channel.name} `}
                  <span className={`font-bold ${!channel.hd && `hidden`}`}>HD</span>
                </p>
              </div>
            ))
          }
        </div>

      </div>


    </div>
  )
}

export default TableChannels