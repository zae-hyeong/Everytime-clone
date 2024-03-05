import { nextPage } from "Component/Redux/boardSlice";
import * as React from "react";
import { useDispatch } from "react-redux";

export interface IBottomMenuProps {}

export default function BottomMenu(props: IBottomMenuProps) {

  const dispatch = useDispatch();
  
  const nextButtonHandler:React.MouseEventHandler = (e) => {
    e.preventDefault();

    dispatch(nextPage());
  }

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
          className="bg-search bg-[length:20px_20px] pr-[24px] bg-no-repeat bg-right text-sm"
        />
      </form>
      <button onClick={nextButtonHandler} className="border-main border font-bold text-main px-3 py-1 rounded">{`다음 >`}</button>
    </div>
  );
}
