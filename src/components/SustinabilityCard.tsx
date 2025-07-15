import "./SustainabilityCard.css";
import subcurrent from "../assets/subcurrent.png";
import cranes from "../assets/cranes.jpg";
import "./GenericCard.css";

const Sustain1 = () => {
  const items = ["Conservation at A Quote", "Contribute", "Donate", "Our Involvement", "+1 for Care Youth Program"];
  return (
    <div className="sustain-card not-stretch">
      <div>
        <p className="title-24">Oceans Program</p>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Sustain2 = () => {
  const items = ["Portfolio", "Gatsby Heights", "Our Partners", "Office", "Future Developments"];
  return (
    <div className="sustain-card not-stretch">
      <div>
        <p className="title-24">Building for the Future</p>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const SustainabilityCard = () => {
  return (
    <div className="card-grid">
      <Sustain1 />
      <Sustain2 />
    </div>
  );
};

export default SustainabilityCard;

