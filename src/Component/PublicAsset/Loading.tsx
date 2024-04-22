import * as React from "react";
import "./Loading.css";

export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return (
    <div className="w-full flex items-center justify-center py-5">
      <div className="loader"></div>
      <div className="text-loader"></div>
    </div>
  );
}
