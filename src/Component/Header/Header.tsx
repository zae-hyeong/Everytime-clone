import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import SearchPost from "./SearchPost";

const Header: React.FC<{}> = () => {
  return (
    <header
      className="h-[50px] px-6 flex justify-between items-center relative
        md:h-[80px] lg:m-auto md:max-w-screen-lg"
    >
      <Logo />
      <Navigation className="hidden md:flex" />
      <UserMenu className="hidden md:flex" />
      <SearchPost className="md:hidden" />
    </header>
  );
};

export default Header;
