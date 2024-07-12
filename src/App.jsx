import Contact from "../components/Contact.jsx"
import Header from "../components/Header"
import Landing from "../components/Landing.jsx"
import MediaHeader from "../components/MediaHeader.jsx"
import Quote from "../components/Quote.jsx"
import Skills from "../components/Skills.jsx"
import Footer from "../components/Footer.jsx"

function App() {

  return (
    <><div>
      <MediaHeader/>
      <div className="body-main--screen">
        <Header/>
        <Landing/>
        <Quote/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
      </div>
    </>
  )
}

export default App
