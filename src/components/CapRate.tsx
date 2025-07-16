import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './IntroSection.css';

const CapRate = ({ projectData }: { projectData: any }) => {
  const capRef = useRef<HTMLElement>(null);
  const targetValue = projectData.capRate; // assume it's a number like 6.5

  useEffect(() => {
    if (!capRef.current) return;

    const element = capRef.current;

    gsap.to({ val: 0 }, {
      val: targetValue,
      duration: 0.5,
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
        <span className="number-large" ref={capRef}>
          {targetValue.toFixed(1)}
        </span>
        <p className="sub">%</p>
      </div>
      <p className="small-title">Cap Rate</p>
    </div>
  );
};

export default CapRate;
