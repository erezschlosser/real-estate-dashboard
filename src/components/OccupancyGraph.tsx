// components/OccupancyGraph.tsx
import { useEffect } from "react";
import "./OccupancyGraph.css";

interface OccupancyGraphProps {
  occupancyRate: number; // e.g. 92 for 92%
}

const OccupancyGraph = ({ occupancyRate }: OccupancyGraphProps) => {
  // clamp value between 0 and 100
  const filledCount = Math.max(0, Math.min(100, Math.round(occupancyRate)));

  useEffect(() => {
    const allCircles = document.querySelectorAll("#all circle");
    allCircles.forEach((circle, index) => {
      if (index < filledCount) {
        circle.classList.add("filled");
      } else {
        circle.classList.remove("filled");
      }
    });
  }, [filledCount]);

  return (
    <div className="occupancy-wrapper1">
      <svg
        id="all"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 125"
      >
        {[...Array(100)].map((_, i) => {
          const x = 12.5 + (i % 20) * 25;
          const y = 12.5 + Math.floor(i / 20) * 25;
          return (
            <circle
              key={i}
              className="grey"
              cx={x}
              cy={y}
              r={7.5}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default OccupancyGraph;
