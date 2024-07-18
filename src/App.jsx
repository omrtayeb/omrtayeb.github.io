import Contact from "../components/Contact.jsx";
import Header from "../components/Header";
import Landing from "../components/Landing.jsx";
import MediaHeader from "../components/MediaHeader.jsx";
import Quote from "../components/Quote.jsx";
import Skills from "../components/Skills.jsx";
import Footer from "../components/Footer.jsx";
import BottomNav from "../components/BottomNav.jsx";

function App() {
  return (
    <>
      <MediaHeader />
      <div className="body-main--screen">
        <Header />
        <Landing />
        <Quote />
        <Skills />
        <Contact />
        <Footer />
        <BottomNav />
      </div>
    </>
  );
}

export default App;
