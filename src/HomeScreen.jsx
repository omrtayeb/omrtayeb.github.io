import Quote from "../components/Quote.jsx";
import Skills from "../components/Skills.jsx";
import Footer from "../components/Footer.jsx";
import Landing from "../components/Landing.jsx";
import Contact from "../components/Contact.jsx";


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
