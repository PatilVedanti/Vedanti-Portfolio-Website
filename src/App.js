import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCursorTrail } from "./hooks/useCursorTrail";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useCursorTrail();

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;