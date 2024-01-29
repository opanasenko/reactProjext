import React from "react";
import Sprite from "./Sprite";

export default function Button({ ico, children, onClick, className, style }) {

  return (
    <button
      onClick={onClick}
      className={["btn", className].join(" ")}
      style={style}
      title={`botton - ${children}`}
    >
      {children}
      {ico && <Sprite id={ico} />}
    </button>
  );
}
