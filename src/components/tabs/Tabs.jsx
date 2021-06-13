import { Container, Row, Image, Col } from "react-bootstrap";
import { homeTabs } from "../../static";
import { Link } from "react-router-dom";

function Tabs() {
  return (
    <Container>
      <Row>
        {homeTabs.map((tab) => (
          <Col as={Link} to={tab.navigation} xs={12} md={6}>
            <div className="imageCardContainer">
              <Image className="tabImage" src={tab.image} />
              <h1>{tab.label}</h1>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tabs;
