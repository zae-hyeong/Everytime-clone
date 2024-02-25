import * as React from "react";

export interface IBookStoreItemProps {
  bookTitle: string;
  bookPrice: number;
  bookImage: string;
}

export default function BookStoreItem(props: IBookStoreItemProps) {
  return (
    <div className="hover:bg-gray-100 border">
      <a href="#">
        <img
          src={props.bookImage}
          alt="book store Item"
          className="aspect-[3/4] object-cover"
        />
        <div className="text-sm p-2 pb-3">{props.bookTitle}</div>
        <div className="text-sm text-main px-2 pb-2">{props.bookPrice}</div>
      </a>
    </div>
  );
}
