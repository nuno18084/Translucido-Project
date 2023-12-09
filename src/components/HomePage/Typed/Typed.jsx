import React from "react";
import Typed from "typed.js";
import "../../../components/HomePage/HomePage.css";

function TypedPhrase() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "permitir trabalho híbrido.",
        "distinta de simpatia.",
        "uma soft skill a desenvolver.",
        "perguntar se está tudo bem.",
      ],
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      startDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="typed-phrase-component"
      style={{ display: "inline-block", height: "3em", overflow: "hidden" }}
    >
      <span className="typed-phrase-component" ref={el} />
    </div>
  );
}

export default TypedPhrase;
