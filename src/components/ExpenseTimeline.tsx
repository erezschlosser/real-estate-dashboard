import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
  } from "recharts";
  import data from "../data/monthlyExpenses.json";
  import "./ExpenseTimeline.css";
  
  const barColor = "#3b82f6";
  
  const ExpenseTimeline = () => {
    return (
      <section className="expense-timeline-section">
        <h2>Monthly Expenses Timeline</h2>
        <div className="timeline-container">
          <div className="timeline-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount">
                  {data.map((_, index) => (
                    <Cell key={index} fill={barColor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExpenseTimeline;
  