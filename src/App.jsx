import Navbar from "./components/NavBar/Navbar"
import "./App.css"
import PreNavBar from "./components/NavBar/PreNavBar"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import Team from "./components/Team/Team"
import RotatingCards from "./components/Services/Services"
import FAQ from "./components/FAQ/FAQ"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductMain from "./components/Products/ProductMain"

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PreNavBar />
              <Navbar />
              <Home />
              <About />
              <RotatingCards />
              <Team />
              <FAQ />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <PreNavBar />
              <Navbar />
              <ProductMain />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
