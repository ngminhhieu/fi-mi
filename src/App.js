import React from "react";
import "./App.sass";
import Body from "./Body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
