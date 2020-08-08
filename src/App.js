import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "./reset.css";
import Typing from "./components/Typing/Typing";
import Newswrap from "./components/News/Newswrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Typing />
      <Newswrap />
    </div>
  );
}

export default App;
