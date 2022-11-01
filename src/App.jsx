
import React, { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [loading, setLoading] = useState(true)
  const mainConatinerLoader = document.getElementById("mainConatinerLoader");
  const spinner = document.getElementById("mainLoader");

  if (loading) {
    setTimeout(() => {
      spinner.style.display = "none"
      mainConatinerLoader.style.display = "none"

      setLoading(false)
    }, 5000);
  }
  return (
    !loading && (
      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>)
  );
}

export default App;
