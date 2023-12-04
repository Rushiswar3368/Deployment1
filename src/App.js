import React from "react";
// import { Header, Footer } from "./components/Header";
// import MainComponent from "./components/MainComponent";
// import { LifeCycle } from "./components/LifeCycle";
// import { Example } from "./components/ExampleAxios";
// import { F2 } from "./components/F2";

import { Main } from "./components_for_meesho/Main";
import { Footer } from "./components_for_meesho/Footer";
import { Header } from "./components_for_meesho/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components_for_meesho/Navbar";
import { About, Contact, Home } from "./components_for_meesho/Chunk";
import { HashRouter, Routes, Route } from "react-router-dom";
// import { Counter } from "./components/Counter";

export function App() {
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello React"),
  //   React.createElement("h1", null, "Hello World")
  // );

  return (
    <div>
      {/* <Header />
      <MainComponent myName="Arjun" />
      <MainComponent myName="Aakash" />
      <MainComponent myName="Aravind" />
      <MainComponent myName="waSTE" />
      <MainComponent myName="bEST" />
      <Footer></Footer> */}
      {/* <LifeCycle  age="20" /> */}
      {/* <LifeCycle /> */}
      {/* <Example/> */}
      {/* <F1/> */}
      {/* <F2/> */}
      {/* {<Counter/>} */}

      <HashRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}
