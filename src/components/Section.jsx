import React from "react";
import Header from "./Header";

export default function Section({ children, title, className }) {
  return (
    <section className={className}>
      {title && <Header textAlign={title[1]}>{title[0]}</Header>}
      <div className="container">
        <div className="grid">{children}</div>
      </div>
    </section>
  );
}
