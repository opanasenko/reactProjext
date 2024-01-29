import NavPanel from "./components/NavPanel";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiense from "./components/Experiense";
import About from "./components/About";
import Projects from "./components/Projects";
import Goals from "./components/Goals";

import Callback from "./components/Callback";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <NavPanel />
      <Hero />
      <Skills />
      <Experiense />
      <About />
      <Projects />
      <Goals />
      <Callback />
      <footer
        className="footer"
        style={{ padding: "20px", backgroundColor: "#000" }}
      >
        <Container>
          <Row>
            <Col>
              <h5 className="heading-5 heading-5_600" style={{ color: "#fff" }}>
                Opanasenko Pavlo
              </h5>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
