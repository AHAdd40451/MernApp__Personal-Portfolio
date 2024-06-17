/* eslint-disable no-unused-vars */
import React from "react";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

import { MdCastForEducation } from "react-icons/md";

import("./Aboutnew.css");

const About = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section id="about">
        <h5>Who's this guy?</h5>

        <h2>About me</h2>

        <div className="container about__container ">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src="/images/me1.jpg"
                alt="about_Image"
                className="about_Image"
              />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card flex  flex-col items-center">
                <FaAward className="about__icon" />
                <h1>Experience</h1>
                <small>2 Years Experience</small>
              </article>

              <article className="about__card flex  flex-col items-center">
                <MdCastForEducation className="about__icon" />
                <h1>Education</h1>
                <small>
                  Undergraduate at PAF-KIET University in Computer Science
                </small>
              </article>
            </div>

            <p className="para">
              I specialize in designing, developing, testing, and deploying web
              applications. I am adept at tackling new challenges and taking on
              responsibilities with diligence. As a flexible and motivated team
              member, I am always eager to contribute. Whether it's crafting
              polished frontends or enhancing backend functionality, I am driven
              by a passion for excellence. If you're in search of a dedicated
              developer to elevate your project, your search ends here! Let's
              work together to create something truly exceptional.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
