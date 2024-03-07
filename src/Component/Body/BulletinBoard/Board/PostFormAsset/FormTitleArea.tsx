import { RootState } from "Component/Redux/Store";
import { titleInput } from "Component/Redux/uploadPostSlice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IFormTitleAreaProps {
  onCancelClicked: React.MouseEventHandler;
}

export default function FormTitleArea(props: IFormTitleAreaProps) {
  const dispatch = useDispatch();

  const postTitleInput = useSelector(
    (state: RootState) => state.postInput.title
  );

  const titleInputHandler = (e: any) => {
    dispatch(titleInput(e.target.value));
  };

  const cancelWriteHandler: React.MouseEventHandler = (e) => {
    props.onCancelClicked(e);
  };

  return (
    <div className="flex w-full border-b p-3">
      <input
        type="text"
        placeholder="글 제목"
        className="outline-none font-bold flex-grow"
        onChange={titleInputHandler}
        value={postTitleInput}
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
