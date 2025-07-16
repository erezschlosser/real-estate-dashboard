//import './NavBar.css';
import './Navbar2.css';
import { useState } from "react";


interface NavbarDesktopProps {
  onPrev: () => void;
  onNext: () => void;
  buildingName: string;
  buildings: any[];
  setIndex: (index: number) => void;
  currentIndex: number;
}



const Mid = () => (
  <div className="mid-nav">
    <div className="mid">
      <div className="flex-wrapper">
        <button className="nav-button active">Overview</button>
        <button className="nav-button">Expenses</button>
        <button className="nav-button">GP & LP</button>
      </div>
    </div>
  </div>
);

const Left = ({
  onPrev,
  onNext,
  buildingName,
  buildings,
  setIndex,
  currentIndex,
}: Pick<NavbarDesktopProps, "onPrev" | "onNext" | "buildingName" | "buildings" | "setIndex" | "currentIndex">) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="left-nav">
      <div className="flex-wrapper">
        {/* Hamburger */}
        <button className="round-button">
          <svg>...</svg>
        </button>

        {/* Prev / Next Arrows */}
        <button className="round-button" onClick={onPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button className="round-button" onClick={onNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

        {/* Building Dropdown */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="nav-button place" style={{ cursor: "pointer" }}>
            {buildingName}
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu-content">
              {buildings.map((b, i) =>
                i !== currentIndex ? (
                  <button key={i} onClick={() => setIndex(i)}>
                    {b.Name}
                  </button>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



const Right = () => (
  <div className="right-nav">
    <div className="settings">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="20" height="20">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
        </svg>
    </div>
  </div>
);

const NavbarDesktop = ({
  onPrev,
  onNext,
  buildingName,
  buildings,
  setIndex,
  currentIndex,
}: NavbarDesktopProps) => (
  <div className="navbar-desktop">
    <Mid />
    <Left
      onPrev={onPrev}
      onNext={onNext}
      buildingName={buildingName}
      buildings={buildings}
      setIndex={setIndex}
      currentIndex={currentIndex}
    />
    <Right />
  </div>
);


export default NavbarDesktop;
