import React from "react";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

import { MdCastForEducation } from "react-icons/md";

import("./About.css");

const About = () => {
  const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "GET TO KNOW ME FROM MY STARTING";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section id="about">
        <h5>Get To Know Me</h5>

        <h2>About me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src="/images/me1.jpg" alt="about_Image" />
            </div>
            <div className="about__me-data">
              <address class="content-info">
                <div class="row">
                  <div class="span-class">
                    <span className="head-d">Name :</span>
                    <p>Abdul Ahad</p>
                  </div>
                  <div class="span-class">
                    <span className="head-d">D.O.B :</span>
                    <p>2004-01-08</p>
                  </div>
                  <div class="span-class">
                    <span className="head-d"> Age :</span>
                    <p> 18</p>
                  </div>
                  <div class="span-class">
                    <span className="head-d"> Religion :</span>
                    <p>Islam</p>
                  </div>
                  <div class="span-class">
                    <span className="head-d">From :</span>
                    <p>Karachi, Pakistan</p>
                  </div>
                </div>
              </address>
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
                <small>I Am learning BSCS At PAF KIET UNIVERSITY</small>
              </article>
            </div>

            <p class="para">
              {" "}
              Hello , I am a MERN stack Web Developer I have a clear, logical
              mind with a practical approach to problem-solving and a drive to
              see things through to completion.I am a highly competent Web
              professional with a proven track record in Developing websites,
              APIs Handling and managing databases. I have strong Back-end
              skills as well as excellent Front-end skills, enabling me to
              interact with a wide range of clients.I will be glad to work with
              you. If you have any queries feel free to ask, I am available 24/7
              to discuss details.
              <br /> Thanks & Regards
              <br />
              ABDUL AHAD
              <br />
              <span id="dots"></span>
              <span id="more">
                {" "}
                When I was in school at 8 standards I started web development at
                FC future coaching center but unfortunately, they only provide
                me with basic for 6 months then I started with online learning
                from Youtube ,Udemy .. etc I try to become a self-learner now I
                am ALHAMDULILLAH when I was in college I completed Full stack
                development for myself it was a big achievement because I am the
                first one in my house and my friend circle who started
                programming it was difficult for me but I do with my pure
                passion and intention After hands-0n experience in web
                development, I started blockchain development it was too
                difficult because this field has fewer tutorials on Youtube and
                other platforms then I go for paid tutorials on Udemy and learn
                Chunk by Chunk and now completed 50 percent and am still in
                processing soon completed the full course I randomly scroll
                Upwork and see full stack development job and I applied they
                said you have to work as a Full Stack developer including
                Blockchain and I am easily said yes I can do then I do their
                many tasks but the Achievement was adding Wallet Connect
                integration on their website yeah at the age of 18 I do I am
                proud myself. Thank you for reading.
              </span>
              <br />
              <a href="#1" onClick={myFunction} id="myBtn">
                <span className="myBtn">GET TO KNOW ME FROM MY STARTING</span>{" "}
              </a>
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
