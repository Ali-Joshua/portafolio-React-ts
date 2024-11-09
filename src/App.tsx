import "./css/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Resume from "./components/Summary";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Curriculum from "./components/Curriculum";
//import React from "react";
//import imageTechnologies from "./assets/img/imageTechnologies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Curriculum />
      <About />
      <Technologies />
      <Resume />
      <Certificates />
      <Contacts />
    </>
  );
}

export default App;
