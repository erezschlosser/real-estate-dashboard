import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import data from "../data/rentRoll.json";
import "./RentRollGraph.css";

const RentRollGraph = () => {
  return (
    <section className="rentroll-section">
      <h2>Rent Roll Overview</h2>
      <div className="rentroll-chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="tenant" angle={-45} textAnchor="end" height={120} tickLine={false} axisLine={false}/>
            <YAxis tickCount={3} axisLine={false} tickLine={false}/>
            <Tooltip />
            <Bar dataKey="rent" radius={[100, 100, 100, 100]} barSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RentRollGraph;
