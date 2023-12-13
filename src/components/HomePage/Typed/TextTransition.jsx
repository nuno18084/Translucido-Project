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
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};

export default TextTyped;
