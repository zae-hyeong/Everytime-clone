import React from "react";
import { Link } from "react-router-dom";

const UserProfileDetailButton: React.FC<{ innerText: string }> = (props) => {
  return (
    <Link
      to="#"
      className="odd:mr-1 border text-gray-500 text-sm px-2 py-1 rounded border-gray-300"
    >
      {props.innerText}
    </Link>
  );
};

export default UserProfileDetailButton;
