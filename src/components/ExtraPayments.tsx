import './ExtraPayments.css';
import './IntroSection.css';

interface ExtraPaymentsProps {
    extraPayments: Record<string, number>; // not an array
    rate: number;
    term: number;
}
  

const PaymentItem = ({ label, value }: { label: string; value: number }) => (
    <div className="payments-item">
      <div className="horiz-double">
        <div className="dot-white"></div>
        <div className="white-20">{label}</div>
      </div>
      <div className="white-14">{`${value} $ /month`}</div>
    </div>
  );
  

const TotalPayments = ({ count }: { count: number }) => {
  return (
    <div className="rate-title-wrapper">
      <div className="small-title-white">Extra Payments</div>
      <div className="white-48">{count}</div>
    </div>
  );
};

const Rate = ({ rate }: { rate: number }) => {
  return (
    <div className="rate-wrapper">
      <div className="rate-value">{rate.toFixed(2)}%</div>
      <div className="small-title">Rate</div>
    </div>
  );
};

const Term = ({ term }: { term: number }) => {
  return (
    <div className="rate-wrapper">
      <div className="rate-value">{term}</div>
      <div className="small-title">Term (Years)</div>
    </div>
  );
};

const ExtraPayments = ({ extraPayments, rate, term }: ExtraPaymentsProps) => {
  return (
    <div className="extra-payments-grid">
      <div className="extra-payments-top">
        <TotalPayments count={Object.keys(extraPayments).length} />
        <div className="divide-white"></div>
        <div className="payments">
              {Object.entries(extraPayments).map(([label, value]) => (
                  <PaymentItem key={label} label={label} value={value} />
              ))}
        </div>
      </div>
      <Rate rate={rate} />
      <Term term={term} />
    </div>
  );
};

export default ExtraPayments;
