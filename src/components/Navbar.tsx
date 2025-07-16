import useIsMobile from "../hooks/useIsMobile";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile"; // ✅ make sure this file exists

interface NavbarProps {
  onPrev: () => void;
  onNext: () => void;
  buildingName: string;
  buildings: any[];
  setIndex: (index: number) => void;
  currentIndex: number;
}

const Navbar = ({
  onPrev,
  onNext,
  buildingName,
  buildings,
  setIndex,
  currentIndex,
}: NavbarProps) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <NavbarMobile
      onPrev={onPrev}
      onNext={onNext}
      buildingName={buildingName}
      buildings={buildings}
      setIndex={setIndex}
      currentIndex={currentIndex}
    />
  ) : (
    <NavbarDesktop
      onPrev={onPrev}
      onNext={onNext}
      buildingName={buildingName}
      buildings={buildings}
      setIndex={setIndex}
      currentIndex={currentIndex}
    />
  );
};

export default Navbar;
