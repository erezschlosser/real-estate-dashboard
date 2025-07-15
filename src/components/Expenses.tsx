import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import data from "../data/expenses.json";
import "./Expenses.css";

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

const Tile = ({ label, value }: { label: string; value: string }) => (
  <div className="expense-tile">
    <p className="expense-tile-label">{label}</p>
    <p className="expense-tile-value">{value}</p>
  </div>
);

const ExpenseCard = ({
  title,
  data
}: {
  title: string;
  data: { label: string; amount: number }[];
}) => {
  const total = data.reduce((acc, curr) => acc + curr.amount, 0);
  const avg = total / data.length;

  return (
    <div className="expense-card">
      <h3>{title}</h3>
      <div className="expense-chart chart-scroll-container">
        <div className="chart-inner">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount">
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="expense-tiles">
        <Tile label="Total" value={`$${total.toLocaleString()}`} />
        <Tile label="Avg Per Item" value={`$${avg.toFixed(0)}`} />
      </div>
    </div>
  );
};

const Expenses = () => {
  return (
    <section className="expenses-section">
      <h2>Expenses Overview</h2>
      <div className="expense-grid">
        <ExpenseCard title="Operating Expenses" data={data.Operating} />
        <ExpenseCard
          title="Repairs & Maintenance"
          data={data.RepairsMaintenance}
        />
        <ExpenseCard title="Financial Costs" data={data.Financial} />
        <ExpenseCard title="Capital Expenses" data={data.Capital} />
      </div>
    </section>
  );
};

export default Expenses;
