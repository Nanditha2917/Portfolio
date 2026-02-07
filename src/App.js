import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Header />

      <div className="fullRow">
        <Summary />
      </div>

      <div className="zig left">
        <Skills />
      </div>
      <div className="zig right">
        <Projects />
      </div>
      <div className="zig left">
        <Certificates />
      </div>
      <div className="zig right">
        <Education />
      </div>

      <div className="fullRow">
        <Contact />
      </div>
    </div>
  );
}
