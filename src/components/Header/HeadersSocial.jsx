import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const HeadersSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abdul-ahad-314197250/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin fontSize={"2rem"} />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub fontSize={"2rem"} />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <AiFillFacebook fontSize={"2rem"} />
      </a>
    </div>
  );
};

export default HeadersSocial;
