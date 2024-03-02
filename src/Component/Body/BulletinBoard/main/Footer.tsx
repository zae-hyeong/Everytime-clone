import * as React from "react";
import { Link } from "react-router-dom";

export interface IFooterProps {}

class FooterItem {
  title: string;
  link: string;
  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
  }
}

const dummyFooterNav: FooterItem[] = [
  new FooterItem("이용약관", "footet-link-a"),
  new FooterItem("개인정보처리방침", "footet-link-b"),
  new FooterItem("청소년보호정책", "footet-link-c"),
  new FooterItem("커뮤니티이용규칙", "footet-link-d"),
  new FooterItem("공지사항", "footet-link-e"),
  new FooterItem("문의하기", "footet-link-f"),
  new FooterItem("© 에브리타임", "footet-link-h"),
];

export default function Footer(props: IFooterProps) {
  return (
    <div className="col-span-3 text-xs text-gray-600 w-full flex flex-col justify-center items-center pb-5 pt-2
    ">
      <ul className="flex mb-1 flex-wrap justify-center">
        {dummyFooterNav.map((footerItem) => (
          <li key={footerItem.link} className="mr-2.5 last:mr-0">
            <Link to={footerItem.link}>{footerItem.title}</Link>
          </li>
        ))}
      </ul>
      <span>직업정보제공사업 신고번호 : J1204020230008</span>
    </div>
  );
}
