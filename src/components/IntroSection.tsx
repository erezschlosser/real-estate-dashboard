import buildingImage from "../assets/building blue.png";
import buildingImage2 from '../assets/building2.png';
import buildingImage3 from '../assets/building3.png';
import "./IntroSection.css";
import './Tags.css';
import PriceCard from "./PriceCard";
import CapRate from "./CapRate";
import NetYield from "./NetYield";


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
          <PriceCard value={projectData.purchasePrice} />
          <div className="caps-net-wrapper">
            <CapRate projectData={projectData} />
            <NetYield projectData={projectData} />
          </div>
        </div>
      </div>
    </section>
  );
};


export default IntroSection;
