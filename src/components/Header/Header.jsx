import React from "react";
import CTA from "./CTA";
import HeadersSocial from "./HeadersSocial";
import("./Header.css");
const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header__container">

          <h1>Abdul Ahad</h1>
          <h5 className="text-light">" Mern & Blockchain Web Developer "</h5>
          <CTA />
          <HeadersSocial />

          <div className="me">
            <img src="/images/me1.png" alt="me" />

          </div>


        </div>

      </header>
    </section>
  );
};

export default Header;
