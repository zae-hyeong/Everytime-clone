import * as React from 'react';

export interface IPostMainBodyProps {
  title: string;
  content: string;
  images?: string[];
}

export default function PostMainBody (props: IPostMainBodyProps) {
  return (
    <>
    <h1 className="text-2xl font-bold mb-3">{props.title}</h1>
      <p className="mb-3">{props.content}</p>
    </>
  );
}
