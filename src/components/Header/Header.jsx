import React from "react";
import CTA from "./CTA";
import HeadersSocial from "./HeadersSocial";
import { motion } from 'framer-motion';
import("./Header.css");
const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header__container">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1>Abdul Ahad</h1>
            <h5 className="text-light">" Mern Stack Web Developer "</h5>
            <CTA />
            <HeadersSocial />

            <div className="me">
              <img src="/images/me2.png" alt="me" />

            </div>
          </motion.div>
        </div>

      </header>
    </section>
  );
};

export default Header;
