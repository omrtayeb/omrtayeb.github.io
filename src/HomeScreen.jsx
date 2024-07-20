import Quote from "../components/components-home-screen/Quote.jsx";
import Skills from "../components/components-home-screen/Skills.jsx";
import Footer from "../components/components-home-screen/Footer.jsx";
import Landing from "../components/components-home-screen/Landing.jsx";
import Contact from "../components/components-home-screen/Contact.jsx";


export default function HomeScreen() {
  return (
    <div className="body-main--screen">

      <Landing />
      <Quote />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
