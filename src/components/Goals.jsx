import React from "react";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";

const data = [
  {
    img: "design",
    title: "desighn",
    subtitle: "simple",
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
  },
  {
    img: "code",
    title: "coding",
    subtitle: "clean",
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
  },
  {
    img: "design",
    title: "simple",
    subtitle: "desighn",
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
  },
];
const Card = () => {
  return (
    <>
      {data.map((el, inx) => (
        <Col
          sm={10}
          md={5}
          lg={4}
          className="goals-card"
          key={"MyGoals" + inx}
          style={{ margin: " 0 -10px" }}
        >
          <picture className="goals-card__picture">
            <img src={`./assets/image/${el.img}.jpeg`} alt="card IMAGE" />
          </picture>
          <p className="goals-card__content button-text-regular">
            {el.content}
          </p>
          <h5 className="goals-card__title heading-h5">{el.title}</h5>
          <h6 className="goals-card__subtitle">{el.subtitle}</h6>
        </Col>
      ))}
    </>
  );
};

export default function Goals() {

  return (
    <section className="padding goals">
      <Header textAlign={"center"}>my goals</Header>
      <Container>
        <Row
          className="justify-content-center"
          style={{ gap: "30px", padding: "0 15px" }}
        >
          <Card />
        </Row>
      </Container>
    </section>
  );
}
