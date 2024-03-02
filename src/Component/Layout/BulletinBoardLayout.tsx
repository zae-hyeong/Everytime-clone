import Footer from "Component/Body/BulletinBoard/Footer";
import * as React from "react";
import { Outlet } from "react-router-dom";

export interface IBulletinBoardLayoutProps {}

export default function BulletinBoardLayout(props: IBulletinBoardLayoutProps) {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
