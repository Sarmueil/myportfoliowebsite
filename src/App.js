import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import { useContext } from "react";
import { themeContext } from "./context"

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
        <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  ); 
}

export default App;
