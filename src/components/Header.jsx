import React, { useEffect, useState } from "react";

export default function Header({ children, textAlign, className }) {
  const [formattedString, setFormattedString] = useState("");

  useEffect(() => {
    const words = children.split(" ");
    const lastWord = words.pop();
    const newString = `${words.join(
      " "
    )} <i class="display-text_800">${lastWord}</i>`;
    setFormattedString(newString);
  }, [children]);

  return (
    <header
      className={[
        "section-header display-text display-text_400",
        className,
      ].join(" ")}
      style={{
        textTransform: "capitalize",
        wordSpacing: "15px",
        textAlign: textAlign,
      }}
      dangerouslySetInnerHTML={{ __html: formattedString }}
    />
  );
}
