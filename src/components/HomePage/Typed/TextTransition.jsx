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
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <span>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </span>
  );
};

export default TextTyped;
