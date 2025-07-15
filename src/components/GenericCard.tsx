// components/GenericCard.tsx
import "./SustainabilityCard.css";
import "./GenericCard.css";

const GenericSide1 = () => {
  const items = ["Contact", "Support", "Careers"];
  return (
    <div className="sustain-card not-stretch">
      <div>
        <p className="title-24">Contact</p>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const GenericSide2 = () => {
  const items = ["Press", "Newsletter", "Privacy Policy", "Cookies", "Partners"];
  return (
    <div className="sustain-card not-stretch">
      <div>
        <p className="title-24">More Info</p>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const GenericCard = () => {
  return (
    <div className="card-grid">
      <GenericSide1 />
      <GenericSide2 />
    </div>
  );
};

export default GenericCard;
