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
                <small>3 Years Experience</small>
              </article>

              <article className="about__card flex  flex-col items-center">
                <MdCastForEducation className="about__icon" />
                <h1>Education</h1>
                <small>Undergraduate at PAF-KIET University in Computer Science</small>
              </article>
            </div>

            <p className="para">
              Full Stack Developer with 3 years of experience in designing,
              developing, testing, and deploying web applications. Known for
              tackling new problems and taking responsibilities conscientiously.
              A flexible and motivated team member. Whether it's building a
              sleek frontend or optimizing backend functionality, I'm always up
              for a challenge. If you're looking for a skilled and passionate
              Developer to elevate your project to new heights,then your search
              ends here! Let's collaborate and create something truly remarkable
              together.
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
