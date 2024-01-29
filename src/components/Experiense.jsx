import React from "react";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";

const exp = [
  {
    title: "S.F.A. LLC",
    position: "Owner",
    description: `As a Senior Software Engineer at Google,
     I played a pivotal role in developing innovative solutions
      for Google's core search algorithms. Collaborating with a dynamic
       team of engineers, I contributed to the enhancement of search accuracy 
       and efficiency,
   optimizing user experiences for millions of users worldwide.`,
    data: "Apr 2023 - Present",
    logo: "altcom_sf",
  },
  {
    title: "Altcom LLC",
    position: "Enginer IT Deportament",
    description: `As a Senior Software Engineer at Google,
     I played a pivotal role in developing innovative solutions
      for Google's core search algorithms. Collaborating with a dynamic
       team of engineers, I contributed to the enhancement of search accuracy 
       and efficiency,
   optimizing user experiences for millions of users worldwide.`,
    data: "Mar 2016 - Feb 2022",
    logo: "altcom_ico",
  },
  {
    title: "Dorstroy LLS",
    position: "System administartor",
    description: `As a Senior Software Engineer at Google,
     I played a pivotal role in developing innovative solutions
      for Google's core search algorithms. Collaborating with a dynamic
       team of engineers, I contributed to the enhancement of search accuracy 
       and efficiency,
   optimizing user experiences for millions of users worldwide.`,
    data: "Jan 2014 - Mar 2016",
    logo: "dorstroy_ico",
  },
];

const BlockExperience = () => {
  return (
    <>
      {exp.map((el, idx) => (
        <Col lg={12} className="experience-card" key={"experience" + idx}>
          <Row>
            <picture className="header-card__img">
              <img src={`./assets/ico/${el.logo}.png`} alt="logo company" />
            </picture>
            <Col lg={8} sm={10} xs={"9"} className="p-0">
              <h4 className="header-card__title heading-h4">
                {el.position} at {el.title}
              </h4>
            </Col>
            <Col lg={"auto"} style={{ marginLeft: "auto" }}>
              <span className="header-card__data heading-h6">{el.data}</span>
            </Col>
          </Row>
          <p className="p-2">{el.description}</p>
        </Col>
      ))}
    </>
  );
};

export default function Experiense() {
  return (
    <section className="padding experience">
      <Header textAlign={"center"}>My Experience</Header>
      <Container>
        <Row>
          <BlockExperience />
        </Row>
      </Container>
    </section>
  );
}
