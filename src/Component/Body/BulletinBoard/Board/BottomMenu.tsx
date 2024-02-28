import * as React from "react";

export interface IBottomMenuProps {}

export default function BottomMenu(props: IBottomMenuProps) {
  return (
    <div className="flex justify-between rounded mt-1 mb-3">
      <form action="submit" className="border border-gray-400 rounded p-2">
        <select className="border-0  mr-2 text-xs text-gray-500">
          <option value="all">전체</option>
          <option value="hashTag">해시태그</option>
          <option value="title">글 제목</option>
          <option value="content">글 내용</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="bg-[url('public/img/search.png')] bg-[length:20px_20px] pr-[24px] bg-no-repeat bg-right text-sm"
        />
      </form>
      <button className="border-main border text-main px-3 py-1 rounded">{`다음 >`}</button>
    </div>
  );
}