import * as React from "react";

interface IPostListProps {
  children?: React.ReactNode;
  postListTitle: string;
}

const PostList: React.FC<IPostListProps> = (props) => {
  return (
    <ul className="border mb-1 bg-white md:bg-gray-100">
      <li>
        <a href="#">
          <h3 className="text-sub p-2 font-bold border border-t-0">
            {props.postListTitle}
          </h3>
        </a>
      </li>
      {props.children}
    </ul>
  );
};

export default PostList;
