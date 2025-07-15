import { useState } from "react";
import './Footer.css';
import './IncreasePlan.css';

import GroupLogoWithText from './Logo';
import SustainabilityCard from './SustinabilityCard';
import GenericCard from './GenericCard';

const FooterConstant = () => {
  return (
    <div className="footer-constant">
      <div className="logo-wrapper">
        <GroupLogoWithText />
      </div>
      <div className="links-div">
        <a href="" className="link">Terms & Conditions</a>
        <a href="" className="link">Data Protection</a>
        <a href="" className="link">Imprint</a>
        <a href="" className="link">Manage Cookies</a>
      </div>
      <p className='footer-text'>Some kind of longer line that there's usually in a footer in a small size</p>
      <p className="footer-text">A Quotes Group © {new Date().getFullYear()}</p>
    </div>
  );
};

const ToggleFooter = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="next-back-footer">
      <div className="calendar-arrows">
        <button className="toggle2" onClick={onBack}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#242424" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button className="toggle2" onClick={onNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#242424" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CardTitle = ({ title }: { title: string }) => (
  <p className="card-title">{title}</p>
);

const Footer = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const cardComponents = [
    {
      title: "Sustainability",
      component: <SustainabilityCard />,
    },
    {
      title: "Information",
      component: <GenericCard />,
    },
  ];

  const handleNext = () => {
    setCardIndex((prev) => (prev + 1) % cardComponents.length);
  };

  const handleBack = () => {
    setCardIndex((prev) => (prev - 1 + cardComponents.length) % cardComponents.length);
  };

  const currentCard = cardComponents[cardIndex];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <ToggleFooter onBack={handleBack} onNext={handleNext} />
        <div className="footer-carousel">
          <div className="card-wrapper">
            <CardTitle title={currentCard.title} />
            {currentCard.component}
          </div>
        </div>
      </div>
      <FooterConstant />
    </footer>
  );
};

export default Footer;
