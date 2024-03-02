import * as React from "react";

export interface IFormTitleAreaProps {
  onCancelClicked: React.MouseEventHandler;
}

export default function FormTitleArea(props: IFormTitleAreaProps) {
  const cancelWriteHandler: React.MouseEventHandler = (e) => {
    props.onCancelClicked(e);
  };

  return (
    <div className="flex w-full border-b p-3">
      <input
        type="text"
        placeholder="글 제목"
        className="outline-none font-bold flex-grow"
      />
      <button
        onClick={cancelWriteHandler}
        className="bg-cancel w-6 h-6 bg-contain bg-no-repeat text-transparent"
      >
        작성취소
      </button>
    </div>
  );
}
