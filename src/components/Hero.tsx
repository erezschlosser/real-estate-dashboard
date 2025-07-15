import "./Hero.css";
import narrativeData from "../data/narrative.json";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Tech Valley Office Complex</h1>
        <p className="hero-narrative">{narrativeData.paragraph}</p>
      </div>
    </section>
  );
};

export default Hero;