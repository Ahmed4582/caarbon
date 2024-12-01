import { useState } from "react";
import BottomHeader from "../Header/BottomHeader/BottomHeader";
import TopHeader from "../Header/TopHeader/TopHeader";
const AuthHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <TopHeader />
      <BottomHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
};

export default AuthHeader;
