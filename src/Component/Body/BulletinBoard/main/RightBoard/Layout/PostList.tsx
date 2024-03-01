import * as React from "react";
import { Link } from "react-router-dom";

interface IPostListProps {
  children?: React.ReactNode;
  postListTitle: string;
}

const PostList: React.FC<IPostListProps> = (props) => {
  return (
    <ul className="border mb-1 bg-white md:bg-gray-50">
      <li>
        <Link to="#">
          <h3 className="text-sub p-2 font-bold border border-t-0">
            {props.postListTitle}
          </h3>
        </Link>
      </li>
      {props.children}
    </ul>
  );
};

export default PostList;
