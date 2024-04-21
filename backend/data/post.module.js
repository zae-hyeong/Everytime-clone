class Post {
  title;
  content;
  uploadTime;
  board;
  postId = Math.random().toString(36).substring(2, 11);
  uploadTimeMeta;
  numOfLikes;
  numOfComments;
  uploader;
  attachedImages;
  
  constructor({
    title,
    content,
    board = "자유게시판",  //임시 조치
    uploader = "익명",
    attachedImages = [],
    numOfLikes = 0,
    numOfComments = 0,
    uploadTimeMeta = new Date(),
  }) {
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
    this.uploader = uploader;
    this.attachedImages = attachedImages;
    this.uploadTimeMeta = uploadTimeMeta;
    this.uploadTime = `${(this.uploadTimeMeta.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${this.uploadTimeMeta
      .getDate()
      .toString()
      .padStart(2, "0")} ${this.uploadTimeMeta
      .getHours()
      .toString()
      .padStart(2, "0")}:${this.uploadTimeMeta
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
}

export const dummyPosts = [
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