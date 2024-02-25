import BookStoreItem from './BookStoreItem';
import dummyBookImg1 from "public/img/dummy/dummy_book1.jpg";
import dummyBookImg2 from "public/img/dummy/dummy_book2.jpg";
import dummyBookImg3 from "public/img/dummy/dummy_book3.jpg";
import dummyBookImg4 from "public/img/dummy/dummy_book4.jpg";

export interface IBookStoreProps {
  className: string;
}

export default function BookStore (props: IBookStoreProps) {
  return (
    <div className={props.className + ' w-full max-w-[600px] m-auto grid grid-cols-4 gap-2'}>
      <BookStoreItem bookTitle={'촉진관리'} bookPrice={16000} bookImage={dummyBookImg1} />
      <BookStoreItem bookTitle={'경영정보시스템'} bookPrice={18000} bookImage={dummyBookImg2} />
      <BookStoreItem bookTitle={'미시경제학(8판)'} bookPrice={15000} bookImage={dummyBookImg3} />
      <BookStoreItem bookTitle={'생화학(Stryer)'} bookPrice={25000} bookImage={dummyBookImg4} />
    </div>
  );
}
