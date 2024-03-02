import * as React from "react";

export interface ISubmitOptionButtonProps {
  id: string;
  label: string;
}

export default function SubmitOptionButton(props: ISubmitOptionButtonProps) {
  return (
    <li key={props.id} className="flex items-center ml-3">
      <input type="checkbox" id={props.id} className="accent-main" />
      <label
        htmlFor={props.id}
        className="ml-1 text-xs font-bold text-gray-400"
      >
        {props.label}
      </label>
    </li>
  );
}
