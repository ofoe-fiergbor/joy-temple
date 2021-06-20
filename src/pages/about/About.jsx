import React from "react";
import "./styles.css";
import Header from "./../../components/header/Header";
import { Row, Container, Card, CardColumns } from "react-bootstrap";
import img from "../../assets/webp/thumbnail_IMG_0705.webp";
import logo from "../../assets/png/icgc_logo-removebg.png";

function About() {
  return (
    <div>
      <Header text="About Us" headerBg={img} />
      <Container>
        <Row className="sectionTitle">
          <h4>What we stand for</h4>
        </Row>

        <CardColumns>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>OUR MISSION STATEMENT</Card.Title>
              <Card.Text>
                Our Mission is to Raise Leaders, Shape Vision, and Influence
                Society through Christ.
                <br />
                <br />
                Through our programs, we trust to make the lives of our people
                better than before they came to Church, and redirect their
                perception and behaviour in conformity with God’s word. This
                attitude which is based on the word of God will transform the
                lives of people in their communities, work place, schools etc.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Our Vision is to establish the house of God, through the
                development of Model New Testament Christians and churches. That
                is, we have the commitment to train and equip God’s people who
                come to our church to develop and grow into maturity in Christ
                so they will manifest the character of Christ.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Our Vision
                  <cite title="Source Title"> - Acts 2:42</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Our Message</Card.Title>
              <Card.Text>
                <ul className="aboutList">
                  <li>Salvation from Sin</li>
                  <li>Acceptance for the Outcast</li>
                  <li>Strength for the Weak</li>
                  <li>Prosperity for honest labour</li>
                  <li>Dominion over the flesh</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                These and many more are what we convey through various
                activities to all our members in particular and the world in
                general.
                <br />
                <br />
                We trust God to enable us present to the world the eternal
                truths of the bible that is doctrinally sound, spiritually
                inspired, mentally challenging and socially relevant.
              </p>
              <footer className="blockquote-footer">
                <small style={{ color: "white" }}>
                  Our Message
                  <cite className="white" title="Source Title ">
                    {" "}
                    - Jeremiah 31:17
                  </cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Our Philosophy</Card.Title>
              <Card.Text>
                <ul className="aboutList hideListStyle">
                  <li>Practical Christianity</li>
                  <li>Human Dignity</li>
                  <li>Excellence</li>
                </ul>
                <br />
                We believe Christianity is not a myth. God's word preached must
                bring truths that can produce results when applied to one’s
                life.
                <br />
                <br />
                Every human being is created in the image and likeness of God
                and must be treated with respect and honour. Also, everything
                the Christian or the human being will do must be in excellent
                shape to the glory of God. (Daniel 5:12)
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src={logo} />
          </Card>
        
          <Card>
            <Card.Body>
              <Card.Title>Statement of Faith</Card.Title>
              <Card.Text>
                <b>We believe...</b> that there is one God, eternally existent
                in three persons: God the Father, God the Son, and God the Holy
                Spirit.
                <br />
                <br />
                <b>We believe...</b> in the deity of our Lord Jesus Christ, in
                His virgin birth, and in His bodily resurrection.
                <br />
                <br />
                <b>We believe...</b>the Bible to be the inspired and infallible
                Word of God.
                <br />
                <br />
                <b>We believe...</b> in salvation by grace through faith in the
                Lord Jesus Christ. Lord Jesus Christ.
                <br />
                <b>We believe...</b>in the baptism of the Holy Spirit with the
                evidence of speaking in other tongues as a subsequent gift to
                salvation.
                <br />
                <br />
                <b>We believe...</b>in the provision of bodily healing in the
                atoning work of Jesus our Saviour.
                <br />
                <br />
                <b>We believe...</b>in the return of the Lord Jesus Christ and
                the resurrection of the saved and the lost; the saved unto
                eternal life, living eternally in the presence of God, and the
                unsaved unto eternal damnation.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Container>
    </div>
  );
}

export default About;
