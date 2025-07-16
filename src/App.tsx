import { useState } from "react";

import building1 from "./data/buildings/building1.json";
import building2 from "./data/buildings/building2.json";
import building3 from "./data/buildings/building3.json";

import "./ArrowButtons.css";

import Navbar from "./components/Navbar"; // <-- new
import IntroSection from "./components/IntroSection";
import SecondSection from "./components/SecondSection";
import IncreaseSection from "./components/IncreasePlan";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
import TextScrambleTest from "./components/TextScrambleTest";

const buildings = [building1, building2, building3];

function App() {
  const [index, setIndex] = useState(0);
  const building = buildings[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + buildings.length) % buildings.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % buildings.length);
  };

  return (
    <>
     <Navbar
        onPrev={handlePrev}
        onNext={handleNext}
        buildingName={buildings[index].Name}
        buildings={buildings}
        setIndex={setIndex}
        currentIndex={index}
      />

      <IntroSection projectData={buildings[index]} buildingIndex={index} />
      <ThirdSection
        acquisitionFee={building["Acquisition Fee"]}
        loan={building["Loan"]}
        param3={building["paramter3"]}
        extraPayments={building.extraPayments}
        rate={building.rate}
        term={building.term}
      />
      
      <IncreaseSection increaseData={building.increasePlan} />
      <SecondSection projectData={building} />
      

      <Footer />
    </>
  );
}

export default App;
