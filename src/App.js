import Home from "./components/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import DevTools from "./components/DevTools/DevTools.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <About />
      <Experience />
      <DevTools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
