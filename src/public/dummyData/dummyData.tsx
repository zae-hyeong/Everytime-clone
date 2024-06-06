import Post from "public/class/Post";
import PostSummeryDetail from "public/class/PostSummeryDetail";
import PostSummery from "public/class/PostSummery";
import SubjectReviewSummery from "public/class/SubjectReviewSummery";

export const dummyPosts: Post[] = [
  new Post({ title: "머야 요즘 새내기들은 오티를", content: "개강하고가는거야?? 우잉..", attachedImages: ['test-post-img.jpg'], numOfLikes: 4, numOfComments: 3}),
  new Post({ title: "남자 미용실", content: "애즈펌 가르마펌 잘 하는 곳 추천좀~", attachedImages: [], numOfLikes:0, numOfComments: 16}),
  new Post({ title: "첫인상 안믿는 이유", content: "인상 더럽다고 생각한 애들이 실제로는 착하고 잘맞는 경우 많앗음ㅋㅋ", attachedImages: [], numOfLikes:3}),
  new Post({ title: "동물들로 힐링하고 가세요", content: "귀여운걸 보면 수명이 늘어난다네요!!", attachedImages: ['test-post-img-pet-1.jpg', 'test-post-img.jpg', 'test-post-img-pet-2.jpg', 'test-post-img-pet-3.jpg'], numOfLikes:26, numOfComments: 12}),
  new Post({ title: "과방을 혼자 들어갈 수 있음?", content: "진짜 낯선 사람 있을까 봐 개무서워서 혼자 있을 때는 절대 못 들어갔는데"}),
  new Post({ title: "돌이 되고 싶다", content: "메타몽처럼 미소짓는 돌이 되고싶다", attachedImages: ['meta_mong.jpg'], numOfComments: 2}),
  new Post({ title: "안녕하세요 뉴진스 하니입니다", content: "뉴진스 좋아하면 개추~", attachedImages: [], numOfLikes:1258457, numOfComments: 14780}),
  new Post({ title: "시간표좀 봐주세요 ㅜㅜ", content: "연강이라서 저 시간안에 강의 들으러 갈 수 있을까요? 참고로 산학협동관에서 신공학관 거리입니다...!", attachedImages: ['testImg.jpg'], numOfLikes:4, numOfComments: 32}),
  new Post({ title: "우리집 고앵이 보고가라", content: "이젠 나보다 감정표현 풍부한거 같다", attachedImages: ['test-post-img-pet-1.jpg']}),
  new Post({ title: "1페이지 제목", content: "", attachedImages: ['test-post-img.jpg'], numOfLikes:4, numOfComments: 3}),
  new Post({ title: "개강파티 2만원", content: "왜이리 비싸냐", attachedImages: [], numOfLikes:1, numOfComments: 2}),
  new Post({ title: "경영 선배님들 ㅜ", content: "경제원론이랑 재무관리 동시에 들으면 빡센가요..??"}),
  new Post({ title: "과 동기들이랑 친해지고싶으면", content: "과방 쳐들어가두됨? 좀 친해지려나? 신입생이에용"}),
  new Post({ title: "내 시간표 망한거 볼사람", content: "4학년인게 킬포인트임 ㄹㅇㅋㅋ", attachedImages: ['test-post-img.jpg'], numOfLikes:9, numOfComments: 14}),
  new Post({ title: "진짜 뒤지게 맛있는 빵집 추천좀", content: "심지어 내가 여자한테 같이 가자해도 수락할만한곳 추천좀", numOfComments: 12}),
  new Post({ title: "메타몽짤 누가 올렸는지는 모르겠는데", content: "마음이 편안해진다", attachedImages: ['meta_mong.jpg'], numOfLikes: 4, numOfComments: 3}),
  new Post({ title: "어제 개강파티 2차부터 기억이 안나", content: "아직 친한 사람도 없는데 어제 일 누구한테 물어봐야하나", attachedImages: ['test-post-img-pet-3.jpg'], numOfLikes: 23, numOfComments: 19}),
  new Post({ title: "다문화세계의 이해",content:  "다문화세계의 이해  시험 족보 구합니다 쪽지주세요"}),
  new Post({ title: "학교에 잘생긴사람 많냐", content: "쭈구러드네... 후", attachedImages: ['test-post-img-pet-1.jpg']}),
  new Post({ title: "이쯤되면 2페이지가 다 채워진다", content: "타자치기 힘들다", numOfLikes:4, numOfComments: 3}),
  new Post({ title: "머야 요즘 새내기들은 오티를", content: "개강하고가는거야?? 우잉..", attachedImages: ['test-post-img.jpg'], numOfLikes:4, numOfComments: 3}),
  new Post({ title: "남자 미용실", content: "애즈펌 가르마펌 잘 하는 곳 추천좀~", numOfComments: 16}),
  new Post({ title: "첫인상 안믿는 이유", content: "인상 더럽다고 생각한 애들이 실제로는 착하고 잘맞는 경우 많앗음ㅋㅋ", numOfLikes:3}),
  new Post({ title: "동물들로 힐링하고 가세요", content: "귀여운걸 보면 수명이 늘어난다네요!!", attachedImages: ['test-post-img-pet-1.jpg', 'test-post-img.jpg', 'test-post-img-pet-1.jpg', 'test-post-img-pet-3.jpg'], numOfLikes:26, numOfComments: 12}),
  new Post({ title: "과방을 혼자 들어갈 수 있음?", content: "진짜 낯선 사람 있을까 봐 개무서워서 혼자 있을 때는 절대 못 들어갔는데"}),
  new Post({ title: "돌이 되고 싶다", content: "메타몽처럼 미소짓는 돌이 되고싶다", attachedImages: ['test-post-img-pet-2.jpg'], numOfComments: 2}),
  new Post({ title: "안녕하세요 뉴진스 하니입니다", content: "뉴진스 좋아하면 개추~", attachedImages: [], numOfLikes:1258457, numOfComments: 14780}),
  new Post({ title: "시간표좀 봐주세요 ㅜㅜ", content: "연강이라서 저 시간안에 강의 들으러 갈 수 있을까요? 참고로 산학협동관에서 신공학관 거리입니다...!", attachedImages: ['testImg'], numOfLikes:4, numOfComments: 32}),
  new Post({ title: "우리집 고앵이 보고가라", content: "이젠 나보다 감정표현 풍부한거 같다", attachedImages: ['test-post-img-pet-1.jpg']}),
  new Post({ title: "1페이지 제목", content: "", attachedImages: ['test-post-img.jpg'], numOfLikes:4, numOfComments: 3}),
  new Post({ title: "개강파티 2만원", content: "왜이리 비싸노", attachedImages: [], numOfLikes:1, numOfComments: 2}),
  new Post({ title: "경영 선배님들 ㅜ", content: "경제원론이랑 재무관리 동시에 들으면 빡센가요..??"}),
  new Post({ title: "과 동기들이랑 친해지고싶으면", content: "과방 쳐들어가두됨? 좀 친해지려나? 신입생이에용"}),
  new Post({ title: "내 시간표 망한거 볼사람", content: "4학년인게 킬포인트임 ㄹㅇㅋㅋ", attachedImages: ['test-post-img.jpg'], numOfLikes:9, numOfComments: 14}),
  new Post({ title: "진짜 뒤지게 맛있는 빵집 추천좀",content:  "심지어 내가 여자한테 같이 가자해도 수락할만한곳 추천좀", numOfComments: 12}),
  new Post({ title: "메타몽짤 누가 올렸는지는 모르겠는데", content: "마음이 편안해진다", attachedImages: ['test-post-img-pet-2.jpg'], numOfLikes:4, numOfComments: 3}),
  new Post({ title: "어제 개강파티 2차부터 기억이 안나", content: "아직 친한 사람도 없는데 어제 일 누구한테 물어봐야하나", attachedImages: ['test-post-img-pet-3.jpg'], numOfLikes:23, numOfComments: 19}),
  new Post({ title: "다문화세계의 이해",content:  "다문화세계의 이해  시험 족보 구합니다 쪽지주세요"}),
  new Post({ title: "학교에 잘생긴사람 많냐", content: "쭈구러드네... 후", attachedImages: ['test-post-img-pet-1.jpg']}),
  new Post({ title: "이쯤되면 2페이지가 다 채워진다", content: "타자치기 힘들다", attachedImages: [], numOfLikes:4, numOfComments: 3}),
];

export const representativePostsDummyData = {
  dummyPopulerPost: [
    new PostSummeryDetail(
      "04 새내기들 따봉 눌러보자",
      "다들 대학생활 화이팅~",
      "자유게시판",
      56,
      9
    ),
    new PostSummeryDetail(
      "기계항공공학부 예비대학 내용 요약",
      "오늘 못 온 사람을 위한 요약글 대충 메모한거랑 기억에 의존해서 쓰는글이라 틀린 점 있을 수 있음 오늘 갔다온 사람들 틀린거 지적 부탁함 그리고 난 뒷풀이 안 가서 뒷풀이 분위기는 모름",
      "새내기게시판",
      25,
      28
    ),
  ],

  dummyHotPosts: [
    new PostSummery(
      "건국대학교 2024년도 기계항공공학부 편입생을 찾습니다!!",
      "02/15 19:02"
    ),
    new PostSummery("우와!", "02/15 17:52"),
    new PostSummery(
      "[건우건희와 함께하는 신입생 및 재학생 캠퍼스투어]",
      "02/15 18:38"
    ),
    new PostSummery(
      "💚상허생명과학대학 동아리 랩소디 부원모집💚",
      "02/15 14:08"
    ),
  ],

  dummySchoolNews: new PostSummeryDetail(
    "[#인터뷰] 단과대가 전하는 새내기 맞이 환영 인사",
    "2024학년도 입학하는 새내기들을 위해 총 12개 단과대학(△건축대학 △경영대학 △공과대학 △문과대학 △부동산과학원 △사범대학 △사회과학대학 △상허생명과학대학 △수의과대학 △예술디자인대학 △이과대학 △KU융합과학기술원)의 학생 대표가 축하 인사를 전했다. 각 단과대만의 고유한 전통과 행사를 소개하며 새내기들을 환영한다. 각 학생 대표의 환영 인사 원문은 건대신문 홈페이지 팝콘에서 확인할 수 있다.",
    "건대신문",
    3,
    4
  ),

  dummyLectureReviews: [
    new SubjectReviewSummery(
      "현대수학특강2",
      "팽성훈",
      "시험문제는 어렵지 않으나 계산이 좀 힘듬.. 수학 지식 별로 없이 강의 계획서 내용만 보고 수강 신청했는데 강의 재밌게 잘 듣고, 학점도 잘 챙겨감"
    ),
    new SubjectReviewSummery(
      "교류여자기기",
      "목형수",
      "교류여자기기는 사실 8학점 짜리 강의의다. 왜냐하면 전전기초설계와 전력전송공학은 교류여자기기의 강의 내용을 바탕으로 진행되기 때문이다."
    ),
    new SubjectReviewSummery(
      "전력전자",
      "조영훈",
      "조영훈 교수님 정말 제가 좋아하는 교수님이시다. 근데 이번에 학점을 너무 후하게 주신거같다.. 에이쁠은 비와 비쁠이 있을때 가치있는거입니다.. 에이쁠 가치를 낮추지 말아주세요.. 미친듯이 공부했능데 에이쁠이 너무 많"
    ),
  ],
};