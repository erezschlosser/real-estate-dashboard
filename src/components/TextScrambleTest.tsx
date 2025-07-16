import { useRef } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TextScrambleTest = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!textRef.current) return;
  
    // Clear text content manually
    textRef.current.textContent = "";
  
    gsap.to(textRef.current, {
      duration: 1,
      text: {
        value: "Hello, GSAP!",
      },
      ease: "power2.out",
    });
  };

  return (
    <div style={{ padding: "2rem", color: "#f7f7f7", fontSize: "24px" }}>
      <div ref={textRef}>Original Text</div>
      <button onClick={handleClick} style={{ marginTop: "1rem", padding: "8px 16px" }}>
        Animate Text
      </button>
    </div>
  );
};

export default TextScrambleTest;
