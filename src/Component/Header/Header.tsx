import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import SearchPost from "./SearchPost";
import Aside from "./Aside/Aside";

const Header: React.FC<{}> = () => {
  return (
    <>
      <header
        className="h-[50px] px-6 flex justify-between items-center relative
        md:h-[80px] lg:m-auto md:max-w-screen-lg"
      >
        <Logo isConcised={true} />
        <Navigation isConcised={true}  />
        <UserMenu isConcised={true} />
        <SearchPost />
      </header>
      <Aside />
    </>
  );
};

export default Header;
