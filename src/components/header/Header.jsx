import React from "react";
import Heading from "../heading/Heading";

function Header({ headerBg, text }) {
  return (
    <div
      className="parralex ministryHeaderContainer"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <Heading text={text} />
    </div>
  );
}

export default Header;
