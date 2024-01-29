import React from "react";

export default function Sprite({ id, className }) {
  return (
    <svg className={className}>
      <use xlinkHref={`/assets/sprite.svg#${id}`} />
    </svg>
  );
}
