import React from "react";
import "./App.scss";
import { Header, Banner, Categories, About } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <About />
    </div>
  );
}

export default App;
