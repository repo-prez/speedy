import NavBar from '../../ui/components/NavBar'
import Footer from '../../ui/components/Footer'
import WpPopUp from '../../ui/components/WpPopUp'
import TvPlans from './components/TvPlans'


const SpeedyTvPage = () => {


  return (
    <div className={`relative bg-slate-200`}>
      <NavBar />
      <TvPlans />


      <WpPopUp />
      <Footer />




    </div>
  )
}

export default SpeedyTvPage