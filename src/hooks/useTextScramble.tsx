// hooks/useTextScramble.ts
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register plugin once
gsap.registerPlugin(TextPlugin);

export const useTextScramble = (
    ref: React.RefObject<HTMLElement>,
    newText: string
  ) => {
    useEffect(() => {
      if (!ref.current) return;
  
      gsap.to(ref.current, {
        duration: 0.8,
        text: newText,
        ease: "power2.out",
      });
    }, [newText, ref]);
  };

