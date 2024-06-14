import React from "react";

const CTA = ({ works }) => {
  return (
    <div className="cta">
      <a
        href={works ? works[0]?.name : "#"}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        GET RESUME
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
