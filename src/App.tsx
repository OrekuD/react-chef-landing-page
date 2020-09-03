import React from "react";
import "./App.scss";
import { Header, Banner, Categories, About, Popular } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <About />
      <Popular />
    </div>
  );
}

export default App;
