import React from "react";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
    <Col lg={6} className="about-section about-section__content">
      <Header>About Me</Header>
      <p className="p-2">
        I'm a passionate, self-proclaimed designer who specializes in full stack
        development (React.js & Node.js). I am very enthusiastic about bringing
        the technical and visual aspects of digital products to life. User
        experience, pixel perfect design, and writing clear, readable, highly
        performant code matters to me.
      </p>
      <p className="p-2">
        I'm a passionate, self-proclaimed designer who specializes in full stack
        development (React.js & Node.js). I am very enthusiastic about bringing
        the technical and visual aspects of digital products to life. User
        experience, pixel perfect design, and writing clear, readable, highly
        performant code matters to me.
      </p>
      <p className="p-2">
        I'm a passionate, self-proclaimed designer who specializes in full stack
        development (React.js & Node.js). I am very enthusiastic about bringing
        the technical and visual aspects of digital products to life. User
        experience, pixel perfect design, and writing clear, readable, highly
        performant code matters to me.
      </p>
    </Col>
  );
};

export default function About() {
  return (
    <section className="padding about">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} md={8}>
            <picture className="about-section about-section__picture">
              <img src="./assets/svg/about-picture-1.svg" alt="picture" />
            </picture>
          </Col>
          <Content />
        </Row>
      </Container>
    </section>
  );
}
