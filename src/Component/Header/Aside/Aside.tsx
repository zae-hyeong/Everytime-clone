import * as React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";

export interface IAsideProps {}

export default function Aside(props: IAsideProps) {
  const headerCloseClickHandler: React.MouseEventHandler = () => {
    //TODO: 클릭하면 aside 열리게
  };

  return (
    <div className="fixed h-full w-full top-0 z-50 md:hidden">
      <aside className="w-4/5 max-w-md h-full bg-white absolute flex flex-col justify-start">
        <Logo isConcised={false} className="p-4"/>
        <Navigation isConcised={false} />
        <UserMenu isConcised={false} className="p-5 mt-6" />
      </aside>
      <div
        onClick={headerCloseClickHandler}
        className="w-full h-full bg-black/55"
      ></div>
    </div>
  );
}
