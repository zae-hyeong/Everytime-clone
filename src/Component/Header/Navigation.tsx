import React from "react";

const dummyNavigationTitle: string[] = [
  "게시판",
  "시간표",
  "강의실",
  "학점계산기",
  "친구",
  "책방",
  "캠퍼스픽",
];

const Navigation: React.FC<{className: string}> = (props) => {
  return (
    <nav className={props.className + " w-full h-full flex items-center"}>
      <ul className="grow items-center justify-center bold leading-5 
        md:text-base md:inline-flex lg:text-lg">
        {dummyNavigationTitle.map(navTitle => <li className='mx-[12px]'>{navTitle}</li>)}
      </ul>
    </nav>
  );
};

export default Navigation;
