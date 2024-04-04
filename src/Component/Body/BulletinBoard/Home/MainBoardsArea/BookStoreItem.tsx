import * as React from "react";
import { Link } from "react-router-dom";

export interface IBookStoreItemProps {
  bookTitle: string;
  bookPrice: number;
  bookImage: string;
}

export default function BookStoreItem(props: IBookStoreItemProps) {
  return (
    <div className="white hover:bg-gray-100 border">
      <Link to="#">
        <img
          src={props.bookImage}
          alt="book store Item"
          className="aspect-[3/4] object-cover"
        />
        <div className="text-sm p-2 pb-3">{props.bookTitle}</div>
        <div className="text-sm text-main px-2 pb-2">{props.bookPrice}</div>
      </Link>
    </div>
  );
}
