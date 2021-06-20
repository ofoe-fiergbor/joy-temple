import React from "react";
import "./styles";
import Header from "./../../components/header/Header";
import img from "../../assets/webp/icgc_ministry.webp";
import { Card, CardDeck, Container } from "react-bootstrap";
import profileImg from "../../assets/webp/pexels-akira-deng-4107414.webp";

function Leadership() {
  const leaders = [
    {
      img: profileImg,
      name: "Rev. Charlotte Frema Quagraine",
      position: "Senior Pastor",
    },
    {
      img: profileImg,
      name: "Rev. Dr. Quagraine",
      position: "Assistant Pastor",
    },
  ];

  return (
    <div>
      <Header text="Meet Our Leadership" headerBg={img} />

      <Container>
        <CardDeck style={{ width: "80%", marginLeft: "10%", paddingTop: "5%" }}>
          {leaders.map(({ img, name, position }, index) => (
            <Card key={index} style={{ marginLeft: "5%", marginRight: "5%" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{position}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

export default Leadership;
