// components/SecondSection.tsx
import "./SecondSection.css";
import "./IntroSection.css"; // reuses styles like .number-large etc.
import OccupancyGraph from "./OccupancyGraph";

interface SecondSectionProps {
  projectData: {
    testimonial: string;
    landSize: number;
    yearBuilt: number;
    occupancyRate: number;
  };
}

const Testimonial = ({ testimonial }: { testimonial: string }) => {
  return (
    <div className="testimonial-wrapper">
        <div className="tooltip-blue">
          <div className="flex-tooltip">
            <div className="svg-insights">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4c3bff" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div className="insights">Insights</div>
          </div>
        </div>
      <div style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem"
        }}>
        <p className="testimonial">{testimonial}</p>
      </div>
    </div>
  );
};

const LandSize = ({
  landSize,
  yearBuilt,
}: {
  landSize: number;
  yearBuilt: number;
}) => {
  return (
    <div className="caps-net-wrapper underline">
      <div className="net-wrapper">
        <text className="number-large">{landSize.toLocaleString()}</text>
        <text className="small-title">Land Size</text>
      </div>
      <div className="net-wrapper left-border nudge-left">
        <text className="number-large">{yearBuilt}</text>
        <text className="small-title">Year Built</text>
      </div>
    </div>
  );
};

const OccupancyWrapper = ({ occupancyRate }: { occupancyRate: number }) => {
  return (
    <div className="occupancy-wrapper">
      <div className="hundred-wrapper">
        <div className="hundred">
          <OccupancyGraph occupancyRate={occupancyRate} />
        </div>
      </div>
      <div className="occupancy-percent-div">
        <text className="number-large blue">{`${occupancyRate}%`}</text>
        <text className="small-blue">Occupancy Rate</text>
      </div>
    </div>
  );
};

const SecondSection = ({ projectData }: SecondSectionProps) => {
  const { testimonial, landSize, yearBuilt, occupancyRate } = projectData;

  return (
    <section className="project-var-wrapper normal-margin">
      <div className="project-var-grid split-grid">
        <Testimonial testimonial={testimonial} />
        <div className="variables-grid for-testimonials">
            <LandSize landSize={landSize} yearBuilt={yearBuilt} />
            <OccupancyWrapper occupancyRate={occupancyRate} />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
