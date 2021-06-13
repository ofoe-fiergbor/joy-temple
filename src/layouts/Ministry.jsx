import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/header/Header";

function Ministry({
  bodyTitle,
  ministryImage,
  children,
  headerBg,
  headerText,
}) {
  return (
    <div>
      <Header headerBg={headerBg} text={headerText} />

      <Container>
        <Row className="sectionTitle">
          <h4>{bodyTitle}</h4>
        </Row>
        <Row>
          <Col>
            <img src={ministryImage} alt={headerText} className="ministryImg" />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ministry;
