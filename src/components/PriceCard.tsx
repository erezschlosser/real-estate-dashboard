import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { formatNumber } from "../utils/format";

gsap.registerPlugin(TextPlugin);

const PriceCard = ({ value }: { value: number }) => {
  const priceRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!priceRef.current) return;
  
    // Clear current text to force GSAP to animate in
    priceRef.current.textContent = "";
  
    gsap.to(priceRef.current, {
      duration: 0.4,
      text: formatNumber(value),
      ease: "steps(3)",
    });
  }, [value]);

  return (
    <div className="purchase-wrapper">
      <div className="tag-01">
        <div className="small-svg" style={{color: "#f7f7f7"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>
        </div>
        <div className="tag-text">Purchase Price</div>
      </div>
      <div className="number-large-div">
        <span className="number-large" ref={priceRef}>
          {formatNumber(value)}
        </span>
        <p className="sub">USD</p>
      </div>
    </div>
  );
};

export default PriceCard;
