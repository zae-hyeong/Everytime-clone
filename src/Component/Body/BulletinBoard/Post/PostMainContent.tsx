import * as React from "react";
import {IPost} from "public/class/Post";
import PostMainHeader from "./PostMainContentAsset/PostMainHeader";
import PostMainBody from "./PostMainContentAsset/PostMainBody";
import PostMainFooter from "./PostMainContentAsset/PostMainFooter";

export interface IPostMainContentProps {
  post?: IPost;
}

export default function PostMainContent(props: IPostMainContentProps) {
  if (props.post === undefined)
    return <div className="w-full border-b p-3">NOT FOUNDED</div>;

  return (
    <div className="w-full border-b p-3">
      <PostMainHeader isMyPost={props.post.isMyPost} />
      <PostMainBody
        title={props.post!.title}
        content={props.post!.content}
        images={props.post!.attachedImages}
      />
      <PostMainFooter
        numOfLikes={props.post!.numOfLikes}
        numOfComments={props.post!.numOfComments}
      />
    </div>
  );
}
