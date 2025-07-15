// components/Fees.tsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./Fees.css";
import './Tags.css';

interface FeesProps {
  acquisitionFee: number;
  loan: number;
  param3: number;
}

const COLORS = ["#4c3bff", "#242424", "#b0b0b0"];

const FeesChart = ({ loan, acquisitionFee, param3 }: FeesProps) => {
  const data = [
    { name: "Loan", value: loan },
    { name: "Acquisition Fee", value: acquisitionFee },
    { name: "Parameter 3", value: param3 },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%" // vertical and horizontal center
            startAngle={0}
            endAngle={360}
            innerRadius="50%"
            outerRadius="80%" // or try 70% if spacing needed
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


const FeeItems = ({ acquisitionFee, loan, param3 }: FeesProps) => {
  const items = [
    { label: "Loan", value: loan },
    { label: "Acquisition Fee", value: acquisitionFee },
    { label: "Parameter 3", value: param3 },
  ];

  return (
    <div className="fee-items-wrapper">
      {items.map((item, index) => (
        <div
          className="fee-li-item"
          key={index}
          style={{
            borderBottom: index < items.length - 1 ? "1px solid #b0b0b0" : "none",
          }}
        >
          <div className="number-and-dot">
            <div
              className="dot"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <p className="fee-number">{item.value.toLocaleString()}</p>
          </div>
          <p className="fee-type">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

const Fees = ({ acquisitionFee, loan, param3 }: FeesProps) => {
  return (
    <div className="fees-wrapper">
      <div style={{ padding: "14px 14px"}}>
        <div className="tag-01">
            <div className="small-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f7f7f7" className="size-6">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
              </svg>
            </div>
            <div className="tag-text">Fees</div>
        </div>
      </div>
      <FeesChart acquisitionFee={acquisitionFee} loan={loan} param3={param3} />
      <FeeItems acquisitionFee={acquisitionFee} loan={loan} param3={param3} />
    </div>
  );
};

export default Fees;
