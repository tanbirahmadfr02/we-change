import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Letter from "./components/Letter/Letter"
import Navbar from "./components/Navbar/Navbar"
import Petition from "./components/Petition/Petition"
import Supporters from "./components/Supporters/Supporters"
import Updates from "./components/Updates/Updates"

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Petition></Petition>
    <Letter></Letter>
    <Updates></Updates>
    <Supporters></Supporters>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
