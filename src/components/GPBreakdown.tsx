import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import gplpData from "../data/gplpStructure.json";
import "./GPBreakdown.css";

const COLORS = ["#3b82f6", "#10b981"];

const GPBreakdown = () => {
  const pieData = gplpData.equitySplit;

  return (
    <section className="gp-breakdown">
      <h2>GP / LP Structure</h2>

      <div className="gp-content">
        {/* Chart */}
        <div className="gp-chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="percent"
                nameKey="role"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Tiles */}
        <div className="gp-details">
          <Tile label="Preferred Return" value={`${gplpData.preferredReturn}%`} />
          <Tile label="GP Co-Investment" value={`$${gplpData.gpCoInvestment.toLocaleString()}`} />
          <Tile label="Exit Proceeds to LP" value={`$${gplpData.exitProceedsSplit.toLP.toLocaleString()}`} />
          <Tile label="Exit Proceeds to GP" value={`$${gplpData.exitProceedsSplit.toGP.toLocaleString()}`} />
          {gplpData.distributionTiers.map((tier, i) => {
            const value = tier.returnToLP || tier.returnToGP || `${tier.lp}% LP / ${tier.gp}% GP`;
            return <Tile key={i} label={tier.tier} value={value} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Tile = ({ label, value }: { label: string; value: string }) => (
  <div className="gp-tile">
    <p className="gp-tile-label">{label}</p>
    <p className="gp-tile-value">{value}</p>
  </div>
);

export default GPBreakdown;
