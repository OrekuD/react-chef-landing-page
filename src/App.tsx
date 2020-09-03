import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Categories,
  About,
  Popular,
  Mobile,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <About />
      <Popular />
      <Mobile />
    </div>
  );
}

export default App;
