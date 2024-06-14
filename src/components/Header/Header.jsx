import React, { useState, useEffect } from "react";
import CTA from "./CTA";
import HeadersSocial from "./HeadersSocial";
import { motion } from "framer-motion";
import { client } from "../../client";

import("./Header.css");
const Header = () => {
  const [works, setWorks] = useState();

  useEffect(() => {
    const query = '*[_type == "contact"]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  console.log(works, "works");

  return (
    <section id="header" class="headernone">
      <header>
        <div className="container header__container">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1
              style={{
                marginBottom: "-12px",
              }}
            >
              Abdul Ahad
            </h1>
            <h5 className="text-light">" Full Stack Developer "</h5>
            <CTA works={works && works} />
            <HeadersSocial />

            <div className="me">
              <img src="/images/me2.jpg" alt="me" />
            </div>
          </motion.div>
        </div>
      </header>
    </section>
  );
};

export default Header;
