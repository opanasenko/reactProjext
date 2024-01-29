import React from "react";
import Header from "./Header";
import Sprite from "./Sprite";
import { Container, Row, Col } from "react-bootstrap";

const pj = [
  {
    num: 1,
    title: "Crypto Screener Application",
    description: `
        I'm Evren Shah Lorem Ipsum is simply dummy 
        text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to specimen book.`,
    image: "p1",
    git: "https://github.com/pavel-jobbox/cv",
  },
  {
    num: 2,
    title: "Crypto Screener Application",
    description: `
        I'm Evren Shah Lorem Ipsum is simply dummy 
        text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to specimen book.`,
    image: "p2",
    git: "https://github.com/pavel-jobbox/cv",
  },
  {
    num: 3,
    title: "Crypto Screener Application",
    description: `
        I'm Evren Shah Lorem Ipsum is simply dummy 
        text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to specimen book.`,
    image: "p1",
    git: "https://github.com/pavel-jobbox/cv",
  },
];

const Project = ({ number, title, description, image, git }) => {
  return (
    <Row className="justify-content-around projects-section">
      <Col lg={5} className="projects-section__picture">
        <img
          src={`./assets/project/${image}.webp`}
          alt="project"
          draggable="false"
        />
      </Col>

      <Col lg={6} className="projects-section__content">
        <span
          className="project-header_number display-text"
          style={{ color: "#fff", fontWeight: "800", display: "block" }}
        >
          0{number}
        </span>
        <h2
          className="project-header_title heading-h2"
          style={{ color: "#fff" }}
        >
          {title}
        </h2>
        <p className="p-2" style={{ color: "#71717A" }}>
          {description}
        </p>
        <a className="project-header_link" href={`${git}`} target="_blank">
          <Sprite id={"link"} />
          <span>go to GitHub</span>
        </a>
      </Col>
    </Row>
  );
};

export default function Projects() {
  return (
    <section className="padding projects">
      <Header textAlign={"center"}>last projects</Header>
      <Container>
        {pj.map((el) => (
          <Project
            key={"lastProjextSection" + el.num}
            description={el.description}
            title={el.title}
            number={el.num}
            image={el.image}
            git={el.git}
          />
        ))}
      </Container>
    </section>
  );
}
