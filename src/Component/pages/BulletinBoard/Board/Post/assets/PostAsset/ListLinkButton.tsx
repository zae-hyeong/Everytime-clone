import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IListLinkBtnProps {
}

export default function ListLinkBtn (props: IListLinkBtnProps) {
  return (
    <Link
        to={"../"}
        className="border border-main rounded-sm px-2 py-1 inline-block ml-1 mt-1"
      >
        <span className="bg-list bg-[length:12px_14px] bg-no-repeat bg-left pl-4 text-sm font-bold text-main">
          글 목록
        </span>
      </Link>
  );
}
