import * as React from "react";
import FormBottomMenu from "./PostFormAsset/FormBottomMenu";
import FormTitleArea from "./PostFormAsset/FormTitleArea";
import Post from "public/class/Post";
import { useSelector } from "react-redux";
import { appendPost } from "Component/Redux/postSlice";
import { initialPage } from "Component/Redux/boardSlice";
import { RootState, useAppDispatch } from "Component/Redux/Store";
import { contentInput, initialInput } from "Component/Redux/uploadPostSlice";

export interface IPostFormProps {}

const inputPlaceholde_deactive = `새 글을 작성해주세요!`;
const inputPlaceholde_active = `에브리타임은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.

아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 전 커뮤니티 이용규칙 전문을 반드시 확인하시기 바랍니다. 

※ 정치·사회 관련 행위 금지 
- 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위 
- 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위 
- 성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위 
- 위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위 
* 해당 게시물은 시사·이슈 게시판에만 작성 가능합니다. 

※ 홍보 및 판매 관련 행위 금지 
- 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위 
- 위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위 
* 해당 게시물은 홍보게시판에만 작성 가능합니다. 

※ 불법촬영물 유통 금지
불법촬영물등을 게재할 경우 전기통신사업법에 따라 삭제 조치 및 서비스 이용이 영구적으로 제한될 수 있으며 관련 법률에 따라 처벌받을 수 있습니다. 

※ 그 밖의 규칙 위반 
- 타인의 권리를 침해하거나 불쾌감을 주는 행위 
- 범죄, 불법 행위 등 법령을 위반하는 행위 
- 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위 
- 음란물, 성적 수치심을 유발하는 행위 
- 스포일러, 공포, 속임, 놀라게 하는 행위`;

export default function PostForm(props: IPostFormProps) {
  const [isInputActive, setIsInputActive] = React.useState(false);

  const inputFocusHandler: React.FocusEventHandler = (e) => {
    setIsInputActive(true);
  };
  const cancelWriteHandler: React.MouseEventHandler = () => {
    setIsInputActive(false);
  };

  const dispatch = useAppDispatch();

  const postTitleInput = useSelector(
    (state: RootState) => state.postInput.title
  );
  const postContentInput = useSelector(
    (state: RootState) => state.postInput.content
  );

  const submitPostFormHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (!postTitleInput || !postContentInput) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    dispatch(initialPage());
    dispatch(
      appendPost(
        new Post(postTitleInput, postContentInput, "자유게시판", "익명", [])
      )
    );
    dispatch(initialInput());
  };

  const contentInputHandler = (e: any) => {
    dispatch(contentInput(e.target.value));
  };

  return (
    <form
      action="submit"
      className="w-full border-2 border-gray-300 p-0 my-1"
      onSubmit={submitPostFormHandler}
    >
      {isInputActive ? (
        <>
          <FormTitleArea onCancelClicked={cancelWriteHandler} />
          <div className="w-full p-3 h-80">
            <textarea
              placeholder={inputPlaceholde_active}
              className="w-full h-full p-3 text-sm outline-none"
              onChange={contentInputHandler}
              value={postContentInput}
            ></textarea>
          </div>
          <FormBottomMenu />
        </>
      ) : (
        <input
          type="text"
          onFocus={inputFocusHandler}
          placeholder={inputPlaceholde_deactive}
          className="w-full text-sm border-gray-300 p-3 bg-gray-100 bg-write bg-no-repeat bg-contain bg-right"
        />
      )}
    </form>
  );
}
