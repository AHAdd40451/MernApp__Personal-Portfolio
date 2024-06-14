import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import Timline from "./components/Timeline/Timline";
import Timeline2 from "./components/Timeline/Timeline2";

const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/Header/Header"));
const Nav = lazy(() => import("./components/Nav/Nav"));
const Services = lazy(() => import("./components/Services/Services"));
const Work = lazy(() => import("./components/Work/Work"));

function App() {
  // const mainConatinerLoader = document.getElementById("mainConatinerLoader");
  // const spinner = document.getElementById("mainLoader");

  // if (loading) {
  //   spinner.style.display = "block";
  //   mainConatinerLoader.style.display = "block";
  // }
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Header />
        <Nav />
        <About />
        <Timeline2 />
        {/* <Timline /> */}
        <Experience />
        <Services />
        <Work />
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
