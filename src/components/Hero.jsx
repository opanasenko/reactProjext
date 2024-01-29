import React from "react";

import SocialLinks from "./SocialLinks";
import { Col, Container, Row } from "react-bootstrap";

const HeroTitle = () => {
  return (
    <div className="hero-bunner__title">
      <h1 className="display-text display-text_400">
        Hello I`m
        <i className="display-text_800"> Opanasenko Pavlo. Frontand </i>
        <i className="outlined outlined_800">Developer </i>
        from <i className="display-text_800">Ukraine</i>
      </h1>
    </div>
  );
};

const HeroDescription = () => {
  return (
    <p className="p-2">
      I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to specimen book.
    </p>
  );
};

const Hero = () => {
  return (
    <section className="padding hero">
      <Container className="container">
        <Row className="flex-sm-row-reverse">
          <Col lg={6} className="hero-bunner hero-bunner_img p-0">
            <img
              src="/assets/svg/hero-picrure.svg"
              draggable="false"
              alt="hero picture"
            />
          </Col>
          <Col lg={6} className="d-flex" style={{ position: "relative" }}>
            <div className="hero-bunner">
              <div className="content">
                <HeroTitle />
                <HeroDescription />
              </div>
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
