import * as React from "react";
import SubmitOptionButton from "./SubmitOptionButton";

export interface IFormBottomMenuProps {
}

export default function FormBottomMenu(props: IFormBottomMenuProps) {

  return (
    <div className="h-10 flex justify-between border-t">
      <div className="flex">
        <button className="h-full w-10 bg-write-hashtag bg-contain bg-no-repeat bg-center text-transparent">
          해쉬태그
        </button>
        <button className="h-full w-10 bg-write-attach bg-contain bg-no-repeat bg-center text-transparent">
          파일 첨부
        </button>
      </div>
      <div className="flex">
        <ul className="flex items-center mr-3">
          <SubmitOptionButton id="anonymity" label="익명" />
          <SubmitOptionButton id="question" label="질문" />
        </ul>
        <button type="submit" className="h-full w-10 bg-red-600 bg-contain bg-write-submit text-transparent">게시물 업로드</button>
      </div>
    </div>
  );
}
