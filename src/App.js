import React, { useState } from "react";
import "./scss/main.scss";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [contributors, setContributors] = useState([]);

  return (
    <div id="main-page">
      <NavBar />
    </div>
  );
}

export default App;
