import * as React from 'react';

export interface IBookStoreProps {
  className: string;
}

export default function BookStore (props: IBookStoreProps) {
  return (
    <div className={props.className + ' w-full bg-slate-600'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid esse deleniti et nobis neque at, sint facilis itaque laudantium sed delectus eaque nemo sit dicta officiis, reprehenderit corrupti impedit.
    </div>
  );
}
