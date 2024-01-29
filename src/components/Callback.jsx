import React from "react";
import MyForm from "./MyForm";
import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
    <>
      <h2 className="display-text">
        Let`s <i className="outlined">talk</i> for <br /> Something special
      </h2>
      <p className="paragraph" style={{ color: "#71717A" }}>
        I seek to push the limits of creativity to create high-engaging,
        user-friendly, and memorable interactive experiences.
      </p>
      <a className="heading-3" href="mailto:pavel.jobbox@gmail.com">
        pavel.jobbox@gmail.com
      </a>
      <a className="heading-3" href="tel:+16505139596">
        6505139596
      </a>
    </>
  );
};

export default function callback() {
  return (
    <section className="padding callback">
      <Container>
        <Row className={"justify-content-around align-items-center"}>
          <Col md={9} lg={6} xl={5} className="callback__item">
            <MyForm />
          </Col>

          <Col lg={5} xl={6} className="callback__item callback__item_content">
            <Content />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
