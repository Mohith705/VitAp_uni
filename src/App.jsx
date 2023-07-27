import './App.css'
import About from './components/About/About'
import Academics from './containers/Academics/Academics'
import Campus from './containers/Campus/Campus'
import Header from './containers/Header/Header'
import Health from "./containers/Health/Health"
import Life from "./containers/Campus_Life/Life"
import Athletics from "./containers/Athletics/Athletics"
import Research from './containers/Research/Research'
import Admission from './containers/Admission/Admission'
import Media from './containers/Media/Media'
import Footer from './containers/Footer/Footer'
import Banner from './containers/Banner/Banner'
import Bannertwo from './containers/Bannertwo/Bannertwo'
import Events from './containers/Events/Events'
import Subfooter from './containers/Subfooter/Subfooter'

function App() {

  return (
    <>
      <Header />
      <About />
      <Campus />
      <Academics />
      <Banner />
      <Research />
      <Events />
      <Health />
      <Bannertwo />
      <Life />
      <Athletics />
      <Admission />
      <Media />
      <Footer />
      <Subfooter />
    </>
  )
}

export default App
