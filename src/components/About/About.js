import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import Card from "../UI/Card";

import classes from "./About.module.css";

import about_image_one from "../../assets/about_images/boardgames.jpg";
import about_image_two from "../../assets/about_images/setup.jpg";
import about_image_three from "../../assets/about_images/nycfc.jpeg";

const About = (props) => {
  return (
    <Container id={props.scrollId} className={classes.about}>
      <h1 className={classes.about_intro}>About Me</h1>
      <Row className={classes.about_row}>
        <Col>
          <Card className={classes.about_card}>
            <p>
              I am an aspiring Computer Engineer currently studying at the NYU
              Tandon School of Engineering. I am passionate about software
              engineering, web development, board games, video games, and
              soccer.
            </p>

            <p>
              I decided to pursue Computer Engineering because of my fascination
              with both computer hardware and software. I have taken many
              courses such as Data Structures and Algorithms, OOP, Embedded
              Systems, Databases, and more.
            </p>

            <p>
              I am also currently pursuing a minor in Science and Technology
              Studies.
            </p>
          </Card>
        </Col>
        <Col className={classes.about_image_col}>
          <Carousel
            fade
            interval={4000}
            indicators={false}
            controls={false}
            keyboard={false}
            className={classes.about_images}
          >
            <Carousel.Item>
              <Image
                rounded
                fluid
                className="d-block w-100"
                src={about_image_one}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                rounded
                fluid
                className="d-block w-100"
                src={about_image_two}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                rounded
                fluid
                className="d-block w-100"
                src={about_image_three}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
