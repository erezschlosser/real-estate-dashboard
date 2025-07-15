// components/NavbarMobile.tsx
import { useState } from "react";
import "./NavbarMobile.css";

interface NavbarMobileProps {
  onPrev: () => void;
  onNext: () => void;
  buildingName: string;
}

const NavbarMobile = ({ onPrev, onNext, buildingName }: NavbarMobileProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-mobile-top">
        <button
          className="mobile-icon-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" stroke="#242424" strokeWidth="1.5" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M3.75 15h16.5" />
            </svg>
          )}
        </button>

        <div className="nav-arrows">
          <button className="round-button" onClick={onPrev} aria-label="Previous building">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button className="round-button" onClick={onNext} aria-label="Next building">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          <div className="mobile-menu-items">
            <div className="building-name">{buildingName}</div>
            <button className="nav-button active">Overview</button>
            <button className="nav-button">Expenses</button>
            <button className="nav-button">GP & LP</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
