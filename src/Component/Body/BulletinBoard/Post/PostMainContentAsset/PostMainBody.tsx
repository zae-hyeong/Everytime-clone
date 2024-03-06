import * as React from "react";

export interface IPostMainBodyProps {
  title: string;
  content: string;
  images?: string[];
}

export default function PostMainBody(props: IPostMainBodyProps) {
  return (
    <div className="w-full mb-4">
      <h1 className="text-2xl font-bold mb-3">{props.title}</h1>
      <p className="mb-3">{props.content}</p>
      {props.images ? <div className="w-full">
        {props.images.map(img => <img src={img} alt="post attached files" />)}
      </div> : <></>}
    </div>
  );
}
