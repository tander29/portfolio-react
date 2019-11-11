import React from "react";
import "./App.css";
import ProjectContainer from "./ProjectComponents/ProjectContainer";

interface App {
  store: any;
}
function App(props: App) {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectContainer />
      </header>
    </div>
  );
}

export default App;
