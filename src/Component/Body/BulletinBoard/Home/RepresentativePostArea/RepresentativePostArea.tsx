import React from "react";
import PostList from "./Layout/PostList";
import PopularPostSummary from "./PopularPostSummary";
import RecentLectureReviewItem from "./RecentLectureReviewItem";
import HotPost from "./HotPost";
import { representativePostsDummyData } from "public/dummyData/dummyData";



const RepresentativePostArea: React.FC<{ className: string }> = (props) => {

  const dummyData = representativePostsDummyData;

  return (
    <div className={props.className}>
      <form action="submit" className="pb-1">
        <input
          type="text"
          placeholder="전체 게시판의 글을 검색하세요!"
          className="hidden md:block w-full border-2 p-2"
        />
      </form>
      <PostList postListTitle={"실시간 인기 글"}>
        {dummyData.dummyPopulerPost.map((post) => (
          <PopularPostSummary post={post} />
        ))}
      </PostList>
      <PostList postListTitle={"HOT 게시물"}>
        {dummyData.dummyHotPosts.map((post) => (
          <HotPost boardPost={post} />
        ))}
      </PostList>
      <PostList postListTitle={"BEST 게시판"}></PostList>
      <PostList postListTitle={"학교 소식"}>
        {[dummyData.dummySchoolNews].map((post) => (
          <PopularPostSummary post={post} />
        ))}
      </PostList>
      <PostList postListTitle={"최근 강의평"}>
        {dummyData.dummyLectureReviews.map((review) => (
          <RecentLectureReviewItem review={review} />
        ))}
      </PostList>
    </div>
  );
};

export default RepresentativePostArea;
