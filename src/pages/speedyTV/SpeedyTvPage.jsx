import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import WpPopUp from '../../ui/components/WpPopUp'
import TvPlans from './components/TvPlans'
import Deco from './components/Deco'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'


const SpeedyTvPage = () => {

  const { filterHome } = useContext(AppContext)
  return (
    <div className={`relative bg-slate-200`}>
      <NavBar />

      {
        filterHome &&
        <div className={`absolute z-40 w-full h-[2000px]  backdrop-opacity-20 backdrop-invert bg-indigo-400/20	border-t-2 border-secondary ease-in-out duration-300`}>
        </div>
      }
      <TvPlans />

      <Deco />
      <WpPopUp />
      <Footer />




    </div>
  )
}

export default SpeedyTvPage