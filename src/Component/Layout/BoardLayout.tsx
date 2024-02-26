import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "Component/Body/BulletinBoard/main/Footer";

export interface IRootLayoutProps {}

export default function BoardLayout(props: IRootLayoutProps) {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
