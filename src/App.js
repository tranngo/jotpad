import React, { useState } from "react";
import "./scss/main.scss";
import Navbar from "./components/navbar/Navbar";
import TextEditor from "./components/TextEditor";

function App() {
  const [contributors, setContributors] = useState([]);

  return (
    <div id="main-page">
      <Navbar />
      <div
        className="container-fluid d-flex justify-content-center"
        id="editor-view"
      >
        <div className="row">
          <div className="col-md-12 my-3" id="editor">
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
