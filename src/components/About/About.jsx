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

        <div className="container about__container">
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
              <article className="about__card">
                <FaAward className="about__icon" />
                <h1>Experience</h1>
                <small>2 Years Experience</small>
              </article>

              <article className="about__card">
                <MdCastForEducation className="about__icon" />
                <h1>Education</h1>
                <small>
                  I am persuing my studies at{" "}
                  <a href="https://jinnah.edu/">
                    {" "}
                    Muhammad Ali Jinnah University
                  </a>
                </small>
              </article>
            </div>

            <p className="para">
              Hi , I'm a Full stack developer with 2 years of experience.
              Currently , pursuing my studies at MAJU university and I have
              strong knowledge of Javascript & Typescript and experience in
              building websites with MERN Stack (E-Commerce) . I mostly worked
              with Modern Authorization Mechanisms, Such As JSON Web Token. I
              have Working Experience With Popular React.js Workflows (Such As
              Flux Or Redux) and Awesome Familiarity With RESTful APIs. Whether
              it's building a sleek frontend or optimizing backend
              functionality, I'm always up for a challenge. If you're looking
              for a skilled and passionate Developer to elevate your project to new
              heights,then your search ends here! Let's collaborate and create
              something truly remarkable together.
              <br /> Thanks & Regards
              <br />
              ABDUL AHAD
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
