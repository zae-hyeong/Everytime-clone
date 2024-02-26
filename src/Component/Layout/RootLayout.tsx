import * as React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export interface IRootLayoutProps {
}

export default function RootLayout(props: IRootLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
