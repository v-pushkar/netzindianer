import React from "react";
import Rssblock from "./components/Rssblock";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Rssblock rssurl={"https://www.gamespot.com/feeds/mashup/"} />
    </div>
  );
}

export default App;
