import React from "react";
import { Link } from "react-router-dom";

const UserMenuItem: React.FC<{ linkExplain: string; bgImg: string }> = (
  props
) => {
  return (
    <Link
      to={''}
      className={
        props.bgImg +
        " block w-[40px] h-[40px] bg-cover text-transparent rounded-md p-1 border bg-origin-content bg-no-repeat ml-1"
      }
    >
      {props.linkExplain}
    </Link>
  );
};

export default UserMenuItem;
