import React from "react";
import PopularPostList from "./PopularPostList";
import HotPostList from "./HotPostList";
import PostSummeryDetail from "../../../../public/class/PostSummeryDetail";
import RecentLectureReview from "./RecentLectureReview";
import SubjectReviewSummery from "../../../../public/class/SubjectReviewSummery";

const dummyData = {
  dummyPopulerPost: [
    new PostSummeryDetail(
      "04 새내기들 따봉 눌러보자",
      "다들 대학생활 화이팅~",
      "자유게시판",
      56,
      9
    ),
    new PostSummeryDetail(
      "기계항공공학부 예비대학 내용 요약",
      "오늘 못 온 사람을 위한 요약글 대충 메모한거랑 기억에 의존해서 쓰는글이라 틀린 점 있을 수 있음 오늘 갔다온 사람들 틀린거 지적 부탁함 그리고 난 뒷풀이 안 가서 뒷풀이 분위기는 모름",
      "새내기게시판",
      25,
      28
    ),
  ],

  dummySchoolNews: new PostSummeryDetail(
    "[#인터뷰] 단과대가 전하는 새내기 맞이 환영 인사",
    "2024학년도 입학하는 새내기들을 위해 총 12개 단과대학(△건축대학 △경영대학 △공과대학 △문과대학 △부동산과학원 △사범대학 △사회과학대학 △상허생명과학대학 △수의과대학 △예술디자인대학 △이과대학 △KU융합과학기술원)의 학생 대표가 축하 인사를 전했다. 각 단과대만의 고유한 전통과 행사를 소개하며 새내기들을 환영한다. 각 학생 대표의 환영 인사 원문은 건대신문 홈페이지 팝콘에서 확인할 수 있다.",
    "건대신문",
    3,
    4
  ),

  dummyLectureReviews: [
    new SubjectReviewSummery(
      "현대수학특강2",
      "팽성훈",
      "시험문제는 어렵지 않으나 계산이 좀 힘듬.. 수학 지식 별로 없이 강의 계획서 내용만 보고 수강 신청했는데 강의 재밌게 잘 듣고, 학점도 잘 챙겨감"
    ),
    new SubjectReviewSummery(
      "교류여자기기",
      "목형수",
      "교류여자기기는 사실 8학점 짜리 강의의다. 왜냐하면 전전기초설계와 전력전송공학은 교류여자기기의 강의 내용을 바탕으로 진행되기 때문이다."
    ),
    new SubjectReviewSummery(
      "전력전자",
      "조영훈",
      "조영훈 교수님 정말 제가 좋아하는 교수님이시다. 근데 이번에 학점을 너무 후하게 주신거같다.. 에이쁠은 비와 비쁠이 있을때 가치있는거입니다.. 에이쁠 가치를 낮추지 말아주세요.. 미친듯이 공부했능데 에이쁠이 너무 많"
    ),
  ]
};

const RepresentativePostArea: React.FC = () => {
  return (
    <div className="row-span-2">
      <form action="submit" className="pb-1">
        <input
          type="text"
          placeholder="전체 게시판의 글을 검색하세요!"
          className="w-full border-2 p-2"
        />
      </form>
      <PopularPostList
        postsTitle={"실시간 인기 글"}
        postContent={dummyData.dummyPopulerPost}
      />
      <HotPostList postListTitle={"HOT 게시물"} />
      <PopularPostList postsTitle={"BEST 게시판"} postContent={[]} />
      <PopularPostList
        postsTitle={"학교 소식"}
        postContent={[dummyData.dummySchoolNews]}
      />
      <RecentLectureReview postsTitle={"최근 강의평"} postContent={dummyData.dummyLectureReviews} />
    </div>
  );
};

export default RepresentativePostArea;
