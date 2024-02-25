import React from "react";

const UserActivityListItem: React.FC<{ innerText: string; bgIcon: string }> = (
  props
) => {
  return (
    <li className="w-full px-3 py-2 border">
      <a href="#" className="flex items-center">
        <img src={props.bgIcon} alt="user activity icon" className="w-3 h-3 mr-2" />
        <span>{props.innerText}</span>
      </a>
    </li>
  );
};

export default UserActivityListItem;
