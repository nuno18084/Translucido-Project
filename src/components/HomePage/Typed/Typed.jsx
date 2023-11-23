import React from "react";
import Typed from "typed.js";

function TypedPhrase() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "permitir trabalho híbrido.",
        "perguntar se está tudo bem.",
        "uma soft skill desenvolvível.",
        "distinta de simpatia.",
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
      className="App"
      style={{ display: "inline-block", height: "3em", overflow: "hidden" }}
    >
      <span ref={el} />
    </div>
  );
}

export default TypedPhrase;
