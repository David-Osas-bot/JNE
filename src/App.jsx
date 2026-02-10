import "./index.css"
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Mission from "./components/mission/Mission";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";





function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Services/>
      <Mission/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
