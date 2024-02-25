import * as React from "react";
import { Link } from "react-router-dom";

export interface IFooterProps {}

const dummyFooterNav: string[] = [
  "이용약관",
  "개인정보처리방침",
  "청소년보호정책",
  "커뮤니티이용규칙",
  "공지사항",
  "문의하기",
  "© 에브리타임",
];

export default function Footer(props: IFooterProps) {
  return (
    <div className="col-span-3 text-xs text-gray-600 w-full flex flex-col justify-center items-center pb-5 pt-2
    ">
      <ul className="flex mb-1 flex-wrap justify-center">
        {dummyFooterNav.map((footerNavItem) => (
          <li className="mr-2.5 last:mr-0">
            <Link to="#">{footerNavItem}</Link>
          </li>
        ))}
      </ul>
      <span>직업정보제공사업 신고번호 : J1204020230008</span>
    </div>
  );
}
