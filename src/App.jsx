import Navbar from "./components/NavBar/Navbar"
import "./App.css"
import PreNavBar from "./components/NavBar/PreNavBar"
import ScrollComponent from "./components/Services/ServicesScroll"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import Team from "./components/Team/Team"
import RotatingCards from "./components/Services/Services"

function App() {

  return (
    <>
      <PreNavBar />
      <Navbar />
      {/* <ScrollComponent/> */}
      <RotatingCards/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
