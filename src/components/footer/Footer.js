import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Container } from "./styled";

export const Footer = () => {
  return (
    <Container>
      <div>
        <p>Designed by LABENU</p>
        <p>|</p>
        <span>
          <p>Built by Lutino Justino</p>
          <a
            href="https://www.linkedin.com/in/lucas-justino-dos-santos-junior-394243233/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Lutinojustino" target="_blank">
            <img src={github} alt="" />
          </a>
        </span>
      </div>
    </Container>
  );
};
