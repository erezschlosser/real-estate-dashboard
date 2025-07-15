import useIsMobile from "../hooks/useIsMobile";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

interface NavbarProps {
  onPrev: () => void;
  onNext: () => void;
  buildingName: string;
}

const Navbar = ({ onPrev, onNext, buildingName }: NavbarProps) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <NavbarMobile onPrev={onPrev} onNext={onNext} buildingName={buildingName} />
  ) : (
    <NavbarDesktop onPrev={onPrev} onNext={onNext} buildingName={buildingName} />
  );
};

export default Navbar;
