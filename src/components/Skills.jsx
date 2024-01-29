import React from "react";
import Header from "./Header";
import Sprite from "./Sprite";
import { Container } from "react-bootstrap";

const skl = [
  { name: "git", icoId: "git" },
  { name: "JavaScript", icoId: "js" },
  { name: "Sass/Scss", icoId: "scss" },
  { name: "React", icoId: "react" },
  { name: "Css", icoId: "css" },
  { name: "Html", icoId: "html" },
  { name: "Figma", icoId: "figma" },
  { name: "ReactNative", icoId: "react" },
  { name: "Bootstrap", icoId: "bs" },
  { name: "MongoDB", icoId: "mongo" },
];

const SectionItem = () => {
  return (
    <>
      {skl.map((i, inx) => (
        <div key={"skills" + inx} className="skills__item">
          <Sprite id={i.icoId} />
          <h5 className="heading-h5 heading-h5_700">{i.name}</h5>
        </div>
      ))}
    </>
  );
};

export default function Skills() {
  return (
    <section className="padding skills">
      <Header textAlign="center">My Skill</Header>
      <Container>
        <div className="grid">
          <SectionItem />
        </div>
      </Container>
    </section>
  );
}
