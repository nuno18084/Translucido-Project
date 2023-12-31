import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "saudáveis",
  "competentes",
  "sensíveis",
  "felizes",
  "produtivas",
];

const TextTyped = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2500 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 style={{ height: "42.5px" }}>
      <TextTransition springConfig={presets.default}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};

export default TextTyped;
