import React from "react";
import Header from "./components/Header";
import "./App.css";
import "./reset.css";
import Typing from "./components/Typing";

function App() {
  return (
    <div className="App">
      <Header />
      <Typing />
    </div>
  );
}

export default App;
