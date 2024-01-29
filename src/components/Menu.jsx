import React from "react";
import Button from "./Button";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Menu() {
  return (
    <Nav className="">
        <Nav.Link href="#home">About Me</Nav.Link>
        <Nav.Link href="#features">Skill</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
        <Nav.Link href="#pricing">Contact me</Nav.Link>
    </Nav>
  );
}
