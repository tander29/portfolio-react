import React from "react";
import "./App.css";
import ProjectContainer from "./ProjectComponents/ProjectContainer";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Career from "./Career/Career";
interface App {
  store: any;
}
function App(props: App) {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        <Skills />
        <ProjectContainer />
        <Career />
      </header>
    </div>
  );
}

export default App;
