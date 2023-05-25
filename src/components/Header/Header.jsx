import React from "react";
import CTA from "./CTA";
import HeadersSocial from "./HeadersSocial";
import { motion } from "framer-motion";


import("./Header.css");
const Header = () => {
  return (
    <section id="header" class="headernone">
      <header>
        <div className="container header__container">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{
              marginBottom: "-12px"
            }}>Abdul Ahad</h1>
            <h5 className="text-light">" Full Stack Developer "</h5>
            <CTA />
            <HeadersSocial />

            <div className="me">
              <img src="https://www.linkpicture.com/q/346134172_638461688320682_5425039504288301608_n-1.jpg" alt="me" />
            </div>
          </motion.div>
        </div>
      </header>
    </section>
  );
};

export default Header;
