import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.jsx";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
