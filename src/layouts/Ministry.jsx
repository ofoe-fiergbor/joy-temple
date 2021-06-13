import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Heading from "./../components/heading/Heading";

function Ministry({
  bodyTitle,
  ministryImage,
  children,
  headerBg,
  headerText,
}) {
  return (
    <div>
      <div
        className="parralex ministryHeaderContainer"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <Heading text={headerText} />
      </div>

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
