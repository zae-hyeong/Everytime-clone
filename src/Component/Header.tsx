import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

const Header: React.FC<{}> = () => {
  return <header className="h-[80px] mx-6 flex justify-between">
    <Logo />
    <Navigation />
    <UserMenu />
  </header>;
};

export default Header;
