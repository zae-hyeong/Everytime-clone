import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "./assets/Header/Header";

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
