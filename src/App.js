import React from "react";
import Header from "./components/Header/Header";
import "./reset.css";
import Typing from "./components/Typing/Typing";
import Newswrap from "./components/News/Newswrap";
import ContactWrap from "./components/Contact/ContactWrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Typing />
      <Newswrap />
      <ContactWrap />
    </div>
  );
}

export default App;
