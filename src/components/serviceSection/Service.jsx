import React from "react";
import { CardDeck } from "react-bootstrap";
import { services } from "../../static";
import Heading from "../heading/Heading";
import SingleCard from "../singleCard/SingleCard";
import "./styles.css";

function Service() {
  return (
    <section className="serviceContainer">
      <Heading text="Chuch Services" />
      <CardDeck>
        {services.map((service, index) => (
          <SingleCard service={service} key={index} />
        ))}
      </CardDeck>
    </section>
  );
}

export default Service;
