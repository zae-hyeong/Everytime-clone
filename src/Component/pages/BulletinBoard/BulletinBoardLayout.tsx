import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./assets/Footer";

export interface IBulletinBoardLayoutProps {}

export default function BulletinBoardLayout(props: IBulletinBoardLayoutProps) {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
