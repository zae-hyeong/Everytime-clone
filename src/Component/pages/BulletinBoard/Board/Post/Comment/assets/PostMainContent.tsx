import * as React from "react";
import {IPost} from "public/class/Post";
import PostMainBody from "../../assets/PostMainContentAsset/PostMainBody";
import PostMainFooter from "../../assets/PostMainContentAsset/PostMainFooter";
import PostMainHeader from "../../assets/PostMainContentAsset/PostMainHeader";

export interface IPostMainContentProps {
  post?: IPost;
  onPostDelete: (loadingState: boolean) => void;
}

export default function PostMainContent(props: IPostMainContentProps) {
  if (props.post === undefined)
    return <div className="w-full border-b p-3">NOT FOUNDED</div>;

  return (
    <div className="w-full border-b p-3">
      <PostMainHeader isMyPost={props.post.isMyPost} onPostDelete={props.onPostDelete} />
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
