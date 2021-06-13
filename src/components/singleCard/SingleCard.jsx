import { Card } from "react-bootstrap";
import './styles.css'

function SingleCard({service}) {
  return (
    <Card border="light" style={{ width: "18rem" }}>
      <Card.Header>{service.day}</Card.Header>
      <Card.Body>
        <Card.Title>{service.time}</Card.Title>
        <Card.Text>{service.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
