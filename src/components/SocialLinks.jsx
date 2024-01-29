import React from "react";
import Sprite from "./Sprite";

export default function SocialLinks({ children, style, className }) {
  const links = [
    { link: "facebook", icoId: "facebook", name: "facebook" },
    { link: "facebook", icoId: "instagram", name: "facebook" },
    { link: "facebook", icoId: "linkdin", name: "facebook" },
    { link: "facebook", icoId: "facebook", name: "facebook" },
  ];

  return (
    <div className={["links", className].join(" ")} style={style}>
      {children}
      {links.map((link, index) => (
        <a
          key={"links" + index}
          title={`${link.name}`}
          href={link.link}
          target="_blank"
          className={`links__item ${index === 0 ? "links__item_active" : ""}`}
        >
          <Sprite id={link.icoId} />
        </a>
      ))}
    </div>
  );
}
