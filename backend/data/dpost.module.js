import seriesImg from '../images/test-post-img.jpg'
import seriesImg1 from '../images/test-post-img-pet-1.jpg'
import seriesImg2 from '../images/test-post-img-pet-2.jpg'
import seriesImg3 from '../images/test-post-img-pet-3.jpg'
import testPostImg from '../images/testImg.jpg'
import testPostImg2 from '../images/meta_mong.jpg'

class Post {
  title;
  content;
  uploadTime;
  board;
  postId;
  upLoadTimeMe;
  numOfLikes;
  numOfComments;
  uploader;
  attachedImages;

  constructor(
    title,
    content,
    board,
    uploader = "익명",
    attachedImages,
    numOfLikes = 0,
    numOfComments = 0,
  ) {
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
    this.uploader = uploader;
    this.attachedImages = attachedImages;
    this.postId = Math.random().toString(36).substring(2, 11);
    this.upLoadTimeMeta = new Date();
    this.uploadTime = `${(this.upLoadTimeMeta.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${this.upLoadTimeMeta
      .getDate()
      .toString()
      .padStart(2, "0")} ${this.upLoadTimeMeta
      .getHours()
      .toString()
      .padStart(2, "0")}:${this.upLoadTimeMeta
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
}

export const dummyPosts = [
  new Post("머야 요즘 새내기들은 오티를", "개강하고가는거야?? 우잉..", "자유게시판", "익명", [seriesImg], 4, 3),
  new Post("남자 미용실", "애즈펌 가르마펌 잘 하는 곳 추천좀~", "자유게시판", "익명", [], 0, 16),
  new Post("첫인상 안믿는 이유", "인상 더럽다고 생각한 애들이 실제로는 착하고 잘맞는 경우 많앗음ㅋㅋ", "자유게시판", "익명", [], 3, 0),
  new Post("동물들로 힐링하고 가세요", "귀여운걸 보면 수명이 늘어난다네요!!", "자유게시판", "익명", [seriesImg2, seriesImg, seriesImg1, seriesImg3], 26, 12),
  new Post("과방을 혼자 들어갈 수 있음?", "진짜 낯선 사람 있을까 봐 개무서워서 혼자 있을 때는 절대 못 들어갔는데", "자유게시판", "익명", [], 0, 0),
  new Post("돌이 되고 싶다", "메타몽처럼 미소짓는 돌이 되고싶다", "자유게시판", "익명", [testPostImg2], 0, 2),
  new Post("안녕하세요 뉴진스 하니입니다", "뉴진스 좋아하면 개추~", "자유게시판", "익명", [], 1258457, 14780),
  new Post("시간표좀 봐주세요 ㅜㅜ", "연강이라서 저 시간안에 강의 들으러 갈 수 있을까요? 참고로 산학협동관에서 신공학관 거리입니다...!", "자유게시판", "익명", [testPostImg], 4, 32),
  new Post("우리집 고앵이 보고가라", "이젠 나보다 감정표현 풍부한거 같다", "자유게시판", "익명", [seriesImg1]),
  new Post("1페이지 제목", "", "자유게시판", "익명", [testPostImg], 4, 3),

  new Post("개강파티 2만원", "왜이리 비싸노", "자유게시판", "익명", [], 1, 2),
  new Post("경영 선배님들 ㅜ", "경제원론이랑 재무관리 동시에 들으면 빡센가요..??", "자유게시판", "익명", [], 0, 0),
  new Post("과 동기들이랑 친해지고싶으면", "과방 쳐들어가두됨? 좀 친해지려나? 신입생이에용", "자유게시판", "익명", [], 0, 0),
  new Post("내 시간표 망한거 볼사람", "4학년인게 킬포인트임 ㄹㅇㅋㅋ", "자유게시판", "익명", [testPostImg], 9, 14),
  new Post("진짜 뒤지게 맛있는 빵집 추천좀", "심지어 내가 여자한테 같이 가자해도 수락할만한곳 추천좀", "자유게시판", "익명", [], 0, 12),
  new Post("메타몽짤 누가 올렸는지는 모르겠는데", "마음이 편안해진다", "자유게시판", "익명", [testPostImg2], 4, 3),
  new Post("어제 개강파티 2차부터 기억이 안나", "아직 친한 사람도 없는데 어제 일 누구한테 물어봐야하나", "자유게시판", "익명", [seriesImg3], 23, 19),
  new Post("다문화세계의 이해", "다문화세계의 이해  시험 족보 구합니다 쪽지주세요", "자유게시판", "익명", [], 0, 0),
  new Post("학교에 잘생긴사람 많냐", "쭈구러드네... 후", "자유게시판", "익명", [seriesImg1], 0, 0),
  new Post("이쯤되면 2페이지가 다 채워진다", "타자치기 힘들다", "자유게시판", "익명", [], 4, 3),

  new Post("머야 요즘 새내기들은 오티를", "개강하고가는거야?? 우잉..", "자유게시판", "익명", [seriesImg], 4, 3),
  new Post("남자 미용실", "애즈펌 가르마펌 잘 하는 곳 추천좀~", "자유게시판", "익명", [], 0, 16),
  new Post("첫인상 안믿는 이유", "인상 더럽다고 생각한 애들이 실제로는 착하고 잘맞는 경우 많앗음ㅋㅋ", "자유게시판", "익명", [], 3, 0),
  new Post("동물들로 힐링하고 가세요", "귀여운걸 보면 수명이 늘어난다네요!!", "자유게시판", "익명", [seriesImg2, seriesImg, seriesImg1, seriesImg3], 26, 12),
  new Post("과방을 혼자 들어갈 수 있음?", "진짜 낯선 사람 있을까 봐 개무서워서 혼자 있을 때는 절대 못 들어갔는데", "자유게시판", "익명", [], 0, 0),
  new Post("돌이 되고 싶다", "메타몽처럼 미소짓는 돌이 되고싶다", "자유게시판", "익명", [testPostImg2], 0, 2),
  new Post("안녕하세요 뉴진스 하니입니다", "뉴진스 좋아하면 개추~", "자유게시판", "익명", [], 1258457, 14780),
  new Post("시간표좀 봐주세요 ㅜㅜ", "연강이라서 저 시간안에 강의 들으러 갈 수 있을까요? 참고로 산학협동관에서 신공학관 거리입니다...!", "자유게시판", "익명", [testPostImg], 4, 32),
  new Post("우리집 고앵이 보고가라", "이젠 나보다 감정표현 풍부한거 같다", "자유게시판", "익명", [seriesImg1]),
  new Post("1페이지 제목", "", "자유게시판", "익명", [testPostImg], 4, 3),

  new Post("개강파티 2만원", "왜이리 비싸노", "자유게시판", "익명", [], 1, 2),
  new Post("경영 선배님들 ㅜ", "경제원론이랑 재무관리 동시에 들으면 빡센가요..??", "자유게시판", "익명", [], 0, 0),
  new Post("과 동기들이랑 친해지고싶으면", "과방 쳐들어가두됨? 좀 친해지려나? 신입생이에용", "자유게시판", "익명", [], 0, 0),
  new Post("내 시간표 망한거 볼사람", "4학년인게 킬포인트임 ㄹㅇㅋㅋ", "자유게시판", "익명", [testPostImg], 9, 14),
  new Post("진짜 뒤지게 맛있는 빵집 추천좀", "심지어 내가 여자한테 같이 가자해도 수락할만한곳 추천좀", "자유게시판", "익명", [], 0, 12),
  new Post("메타몽짤 누가 올렸는지는 모르겠는데", "마음이 편안해진다", "자유게시판", "익명", [testPostImg2], 4, 3),
  new Post("어제 개강파티 2차부터 기억이 안나", "아직 친한 사람도 없는데 어제 일 누구한테 물어봐야하나", "자유게시판", "익명", [seriesImg3], 23, 19),
  new Post("다문화세계의 이해", "다문화세계의 이해  시험 족보 구합니다 쪽지주세요", "자유게시판", "익명", [], 0, 0),
  new Post("학교에 잘생긴사람 많냐", "쭈구러드네... 후", "자유게시판", "익명", [seriesImg1], 0, 0),
  new Post("이쯤되면 2페이지가 다 채워진다", "타자치기 힘들다", "자유게시판", "익명", [], 4, 3),
];