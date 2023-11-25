import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home/Home.jsx";
// import About from "./components/About/About.jsx";
// import Experience from "./components/Experience/Experience.jsx";
// import Projects from "./components/Projects/Projects.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Nav from "./components/Navbar/Nav.jsx";
// import DevTools from "./components/DevTools/DevTools.jsx";
import "./App.css";
import RedirectionPage from "./components/RedirectionPage/RedirectionPage";

function App() {
  return (
    <div className="app">
      {/* <Nav />
      <Home />
      <About />
      <Experience />
      <DevTools />
      <Projects />
      <Contact />
      <Footer /> */}
      <RedirectionPage />
    </div>
  );
}

export default App;
