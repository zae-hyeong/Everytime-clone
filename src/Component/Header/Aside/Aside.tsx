import * as React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "Component/Redux/Store";
import { activeAside } from "Component/Redux/asideSlice";

export interface IAsideProps {}

export default function Aside(props: IAsideProps) {

  const dispatch = useAppDispatch();
  
  const headerCloseClickHandler: React.MouseEventHandler = () => {
    dispatch(activeAside(false));
  };

  const isAsideActive = useSelector((state: RootState) => state.aside.isActive);

  return (
    <div className={isAsideActive ? "fixed h-full w-full top-0 z-50 md:hidden" : "hidden"}>
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
