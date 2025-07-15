import Fees from "./Fees";
import ExtraPayments from "./ExtraPayments";
import "./ThirdSection.css";

interface ThirdSectionProps {
  acquisitionFee: number;
  loan: number;
  param3: number;
  extraPayments: { [key: string]: number };
  rate: number;
  term: number;
}

const ThirdSection = ({
  acquisitionFee,
  loan,
  param3,
  extraPayments,
  rate,
  term
}: ThirdSectionProps) => {
  return (
    <section className="third-section">
      <div className="bento">
        <Fees acquisitionFee={acquisitionFee} loan={loan} param3={param3} />
        <ExtraPayments extraPayments={extraPayments} rate={rate} term={term} />
      </div>
    </section>
  );
};

export default ThirdSection;

