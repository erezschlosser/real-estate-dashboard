import projectData from "../data/projectVariables.json";
import "./ProjectVariables.css";

const formatCurrency = (num: number) =>
  `$${num.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

const ProjectVariables = () => {
  return (
    <section className="project-variables">
      <h2>Project Variables</h2>
      <div className="project-grid">
        <Card label="Purchase Price" value={formatCurrency(projectData.purchasePrice)} />
        <Card label="Acquisition Fee" value={formatCurrency(projectData.acquisitionFee)} />
        <Card label="Loan Amount" value={formatCurrency(projectData.loanAmount)} />
        <Card label="Renovation Budget" value={formatCurrency(projectData.renovationBudget)} />
        <Card label="Year Built" value={projectData.yearBuilt} />
        <Card label="Land Size" value={`${projectData.landSizeSqm} m²`} />
        <Card label="Gross Yield" value={`${projectData.grossYield}%`} />
        <Card label="Net Yield" value={`${projectData.netYield}%`} />
        <Card label="Cap Rate" value={`${projectData.capRate}%`} />
        <Card label="Project Duration" value={`${projectData.projectDurationYears} yrs`} />
        <Card label="Exit Price Estimate" value={formatCurrency(projectData.exitPriceAssumption)} />
        <Card label="Occupancy Rate" value={`${projectData.occupancyRate}%`} />
      </div>
    </section>
  );
};

const Card = ({ label, value }: { label: string; value: string | number }) => (
  <div className="variable-card">
    <p className="variable-label">{label}</p>
    <p className="variable-value">{value}</p>
  </div>
);

export default ProjectVariables;

