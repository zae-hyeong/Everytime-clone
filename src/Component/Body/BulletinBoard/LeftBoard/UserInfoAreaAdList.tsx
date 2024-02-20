import React from "react";
import sideDummyAdBanner1 from "../../../../public/img/dummy/side-dummy-ad-1.jpg";
import sideDummyAdBanner2 from "../../../../public/img/dummy/side-dummy-ad-2.jpg";
import sideDummyAdBanner3 from "../../../../public/img/dummy/side-dummy-ad-3.png";

const UserInfoAreaAdList: React.FC<{ className: string }> = (props) => {
  return (
    <div>
      <article className={props.className + ""}>
        <img src={sideDummyAdBanner1} alt="side ad banner 1" />
        <img src={sideDummyAdBanner2} alt="side ad banner 2" />
        <img src={sideDummyAdBanner3} alt="side ad banner 3" />
      </article>
    </div>
  );
};

export default UserInfoAreaAdList;
