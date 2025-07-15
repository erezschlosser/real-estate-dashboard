// components/IncreaseSection.tsx
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import "./IncreasePlan.css";
import "./IntroSection.css";
import "./SecondSection.css";
import './Tags.css';

interface IncreaseSectionProps {
  increaseData: Record<string, number[]>;
}

const Year = ({ currentYear }: { currentYear: string }) => {
  return (
    <div className="half-div">
        <div className="tag-01 extra-margin">
          <div className="small-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f7f7f7" className="size-6">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
            </svg>
          </div>
          <div className="tag-text">Increase Plan</div>
      </div>
      <text className="small-title">Years</text>
      <text className="number-large mid">{currentYear}</text>
    </div>
  );
};

const CalendarToggle = ({
  onBack,
  onForward,
  isBackDisabled,
  isForwardDisabled,
}: {
  onBack: () => void;
  onForward: () => void;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
}) => {
  return (
    <div className="calendar-toggle-div">
      <div className="calendar-arrows">
        <button
          className={`toggle1 ${isBackDisabled ? "disabled" : ""}`}
          onClick={onBack}
          disabled={isBackDisabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isBackDisabled ? "#aaa" : "#242424"}
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          className={`toggle1 ${isForwardDisabled ? "disabled" : ""}`}
          onClick={onForward}
          disabled={isForwardDisabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isForwardDisabled ? "#aaa" : "#242424"}
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "14px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {payload[0].value}
      </div>
    );
  }
  return null;
};

const Increase = ({ data }: { data: { month: string; value: number }[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="increase-wrapper">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} onMouseLeave={() => setActiveIndex(null)}>
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            tickCount={3}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="value"
            fill="#4c3bff"
            radius={[100, 100, 100, 100]}
            barSize={60}
            onMouseOver={(_, index) => setActiveIndex(index)}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === activeIndex ? "#242424" : "#4c3bff"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const IncreaseSection = ({ increaseData }: IncreaseSectionProps) => {
  const years = Object.keys(increaseData);
  const [yearIndex, setYearIndex] = useState(0);
  const currentYear = years[yearIndex];
  const rawValues = increaseData[currentYear];

  const barData = rawValues.map((value, index) => ({
    month: new Date(0, index).toLocaleString("default", { month: "short" }),
    value,
  }));

  const handleBack = () => {
    if (yearIndex > 0) setYearIndex((prev) => prev - 1);
  };

  const handleForward = () => {
    if (yearIndex < years.length - 1) setYearIndex((prev) => prev + 1);
  };

  return (
    <section className="wrapper2">
      <div className="third-grid">
        <div className="double-header">
          <Year currentYear={currentYear} />
          <CalendarToggle
            onBack={handleBack}
            onForward={handleForward}
            isBackDisabled={yearIndex === 0}
            isForwardDisabled={yearIndex === years.length - 1}
          />
        </div>
        <Increase data={barData} />
      </div>
    </section>
  );
};

export default IncreaseSection;
