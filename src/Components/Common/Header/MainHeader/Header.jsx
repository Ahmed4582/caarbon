import { useState } from "react";
import BottomHeader from "../BottomHeader/BottomHeader";
import CenterHeader from "../CenterHeader/CenterHeader";
import TopHeader from "../TopHeader/TopHeader";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div >
      <TopHeader />
      <CenterHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <BottomHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
};

export default Header;