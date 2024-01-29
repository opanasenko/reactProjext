import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Navbar, Container, Nav } from "react-bootstrap";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";

export default function NavPanel() {
  const downloadPdf = () => {
    const pdfUrl = "./cv/cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "opanasenko_pavlo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar style={{background: "#fff"}}>
      <Container>
        {windowWidth > 700 ? (
          <Navbar.Brand href="#home">PVL</Navbar.Brand>
        ) : (
          null
        )}
        {windowWidth > 700 ? <Menu /> : <BurgerMenu />}
        <Button
          className="button-text-large"
          onClick={downloadPdf}
          ico="download-ico"
        >
          Resume
        </Button>
      </Container>
    </Navbar>
  );
}
