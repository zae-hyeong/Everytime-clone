import * as React from "react";

export interface ISearchPostProps {
  className: string;
}

export default function SearchPost(props: ISearchPostProps) {
  const [isSearchWindowActive, setIsSearchWindowActive] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const searchPostClickHandler: React.MouseEventHandler = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    setIsSearchWindowActive(true);
    inputRef!.current!.focus();
  };

  const onFocusBlurHandler: React.FocusEventHandler = (e: React.FocusEvent) => {
    setIsSearchWindowActive(false);
    inputRef!.current!.value = "";
  };

  return (
    <>
      <button
        className={props.className + " text-sm text-main md:hidden"}
        onClick={searchPostClickHandler}
      >
        글 검색
      </button>
      <form
        className={
          isSearchWindowActive ? "absolute w-full left-0 p-2 text-sm" : "hidden"
        }
      >
        <input
          type="text"
          ref={inputRef}
          onBlur={onFocusBlurHandler}
          placeholder="전체 게시판의 글을 검색하세요!"
          className="w-full border-2 p-2"
        />
      </form>
    </>
  );
}
