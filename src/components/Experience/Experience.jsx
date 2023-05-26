import React from "react";
import { motion } from "framer-motion";
import { BsPatchCheckFill } from "react-icons/bs";
import("./Experience.css");

const Experience = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>

        <div className="container experience__container">

          <div className="experience__frontend">
            <h3>Front-End</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>BOOTSTRAP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>REACT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>NEXT.JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>Vue</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>ANGULAR</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>SASS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>TAILWIND CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__Backend">
            <h3>Back-End</h3>
            <div className="experience__content">


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>TYPESCRIPT</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>PYTHON</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>NODE.JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>RESTFULL APIS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>EXPRESS.JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>C++</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>C#</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>PHP</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>MONGO-DB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>SQL</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>







            </div>
          </div>

          <div className="experience__Backend">
            <h3>Others</h3>
            <div className="experience__content">


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>Github</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>



              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>AWS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>DOCKER</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>


              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>KUBERNETEES</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div className="main">
                  <h4>TESTING</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>


        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
