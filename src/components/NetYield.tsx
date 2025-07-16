import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './IntroSection.css';

const NetYield = ({ projectData }: { projectData: any }) => {
  const yieldRef = useRef<HTMLElement>(null);
  const targetValue = projectData.netYield;

  useEffect(() => {
    if (!yieldRef.current) return;

    const element = yieldRef.current;

    gsap.to({ val: 0 }, {
      val: targetValue,
      duration: 0.6,
      ease: "steps(3)",
      onUpdate() {
        if (element) {
          element.textContent = (this.targets()[0].val as number).toFixed(2);
        }
      },
    });
  }, [targetValue]);

  return (
    <div className="net-wrapper">
      <div className="number-large-div">
        <span className="number-large" ref={yieldRef}>
          {targetValue.toFixed(2)}
        </span>
        <p className="sub">%</p>
      </div>
      <p className="small-title">Net Yield</p>
    </div>
  );
};

export default NetYield;
