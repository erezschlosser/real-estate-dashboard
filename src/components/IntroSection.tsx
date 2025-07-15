import buildingImage from "../assets/building blue.png";
import buildingImage2 from '../assets/building2.png';
import buildingImage3 from '../assets/building3.png';
import "./IntroSection.css";
import './Tags.css';

const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US");
};

const ImageCard = ({ buildingIndex }: { buildingIndex: number }) => {
  const images = [buildingImage, buildingImage2, buildingImage3];
  const selectedImage = images[buildingIndex];

  return (
    <div className="image-wrapper">
      <img src={selectedImage} alt="Building" className="image-main" />
    </div>
  );
};


const PriceCard = ({ projectData }: { projectData: any }) => {
  return (
    <div className="purchase-wrapper">
      <div className="tag-01">
          <div className="small-svg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f7f7f7" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="tag-text">Purchase Price</div>
      </div>
      <div className="number-large-div">
        <p className="number-large">{formatNumber(projectData.purchasePrice)}</p>
        <p className="sub">USD</p>
      </div>
    </div>
  );
};

const CapRate = ({ projectData }: { projectData: any }) => {
  return (
    <div className="net-wrapper">
      <div className="number-large-div">
        <p className="number-large">{projectData.capRate}</p>
        <p className="sub">%</p>
      </div>
      <p className="small-title">Cap Rate</p>
    </div>
  );
};

const NetYield = ({ projectData }: { projectData: any }) => {
  return (
    <div className="net-wrapper left-border">
      <div className="number-large-div">
        <p className="number-large">{projectData.netYield}</p>
        <p className="sub">%</p>
      </div>
      <p className="small-title">Net Yield</p>
    </div>
  );
};

const IntroSection = ({
  projectData,
  buildingIndex,
}: {
  projectData: any;
  buildingIndex: number;
}) => {
  return (
    <section className="project-var-wrapper">
      <div className="project-var-grid">
        <ImageCard buildingIndex={buildingIndex} />
        <div className="variables-grid">
          <PriceCard projectData={projectData} />
          <div className="caps-net-wrapper">
            <CapRate projectData={projectData} />
            <NetYield projectData={projectData} />
          </div>
        </div>
        <button className="expand-image">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </button>
      </div>
    </section>
  );
};


export default IntroSection;
