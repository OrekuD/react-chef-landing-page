import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Categories,
  About,
  Popular,
  Mobile,
  Testimonial,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <About />
      {/* <Popular />
      <Mobile />
      <Testimonial />
      <Footer /> */}
    </div>
  );
}

export default App;
