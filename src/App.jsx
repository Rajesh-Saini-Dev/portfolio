import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Education />
      <Skills />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
