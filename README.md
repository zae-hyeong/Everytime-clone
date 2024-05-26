# 에브리타임 클론코딩

## 🔗Project Link

Git Hub : https://github.com/zae-hyeong/Everytime-clone

Demo Page : https://zae-hyeong.github.io/Everytime-clone/

관련 공부 기록 : [TailWind](https://www.notion.so/TailWind-c017e903c42c47e0b8d93840db279781?pvs=21) [React](https://www.notion.so/React-6c8a13f497ff4fd8a34e79c2fb9e4f00?pvs=21) [TypeScript](https://www.notion.so/TypeScript-8a56a0389e7246fba0606052d2e8e33f?pvs=21) [에브리타임 시행착오](https://www.notion.so/09a432843b64475dacaa745ab6bfe7f8?pvs=21) 

## 🤔Problem Statement

### 시작한 이유

1. React를 배우고 기본적인 기능을 구현하는 연습이 필요하다고 생각했다. 웹에서 사용하는 가장 기본적인 기능인 게시물 웹 페이지를 만들고자 했고, 웹 사이트 중 게시물 기능에 충실하고 큰 커뮤니티인 대학생 커뮤니티 “에브리타임”을 클론하며 공부하고자 했다.
2. 안써봤던 React + TypeScript + Tailwind 조합을 통해 새로운 프레임워크와 TypeScript에 적응하고자 했다.
    1. React와 같이 컴포넌트 기반 개발에는 utility-based CSS가 궁합이 좋다고 해서, 사용해보고자 했다.
    2. [쇼핑몰 DarKer](https://www.notion.so/DarKer-5116c652381e4a2aac8ce4eb25667587?pvs=21)를 만들면서 React를 연습할때, 의도하지 않은 타입의 값(undefine, 숫자가 아닌 string으로 넘어오는 경우)이 넘어와서 종종 에러가 발생했고, 그 에러를 수정하기 위해 시간이 오래걸렸다. 따라서 타입을 지정해준 TypeScript로 개발을 하고자 했다.
3. 클론 코딩을 위해 웹 사이트를 둘러보던 도중 반응형이 미흡하게 반영되어 있고, 일부 겹치는 구간도 보였다. 따라서 원본 웹 페이지에서 반응형을 제대로 구현하여 수정해보고자 했다.

### 목표

1. React로 웹의 핵심적인 기능 구현에 익숙해지자.
2. TypeScript에 익숙해지자, React 안에서 TypeScript를 어떻게 사용하는지 이해하자
3. TailWind를 사용하며 Utillity-based CSS 프레임워크에 대해 이해도를 높이자
4. 반응형을 제대로 적용해보자 / 사용해본적 없는 Grid Layout을 적극적으로 활용해보자

## 📖 Detail Description

### Design (원래 웹 사이트)
![origin](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/8b5aa3f5-6f50-474d-8166-49c2577485c5)
원본 홈페이지 : https://everytime.kr/

![clone](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/0990d68c-7626-4226-aa1f-6b2cba22366c)
완성된 클론 홈페이지

### 구현

1. 반응형 제작, 원본 홈페이지의 미흡사항 수정
    원래 웹 사이트에서 있던 반응성이 떨어지는 구간들을 수정하여 개선하였다.
    1. 메인 페이지

        ![원본-메인-반응형](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/2c9042f7-430c-49ce-bd0f-022bdec7658f)
        
        #### 원본 홈페이지
        가운데 정렬은 되나, 창이 작아져도 콘텐츠의 크기가 줄어들지 않는다.

        ![수정-메인-반응형](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/dbd9996f-eb98-4c8b-a273-8bbd52bcccbd)

        #### 수정 후<br/>
        기본적으로 가운데 정렬이 되며, 콘텐츠 크기보다 창이 작아지면 콘텐츠의 크기가 줄어들며 한 눈에 들어오게 된다.
        
    2. 게시물 페이지

        ![원본-게시물-반응형](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/00b413c1-0d43-4223-b4a1-37ec7eb035bd)

        #### 원본 홈페이지<br/>
        오른쪽에 추천 게시물 탭이 잘리고 아래 footer가 잘린다.
        
        ![수정-게시물-반응형](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/76d73f07-f827-4510-aa70-a7383185a44d)

        #### 수정 후<br/>
        오른쪽 추천 게시물 탭이 잘리지 않고, 어느정도 작아지면 숨겨지며, footer가 잘리지 않고 가운데에 잘 정렬된다.
        
2. React Router를 사용한 SPA
    ![라우터 이동](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/01f3a2e7-0ca8-4bf4-b85a-d4e739f4198c)

    리액트 라우터를 사용하여, 헤더 네비게이션 클릭시, URL이 변경된다.
    창이 작아졌을떄는 왼쪽의 aside를 통해서 페이지 이동이 가능하다.
    
3. 게시물/댓글 업로드 기능

    ![게시물댓글-업로드](https://github.com/zae-hyeong/Everytime-clone/assets/58213558/d83a7ea9-f157-4f9f-b706-3e3d353236e7)

    게시물 조회, 업로드, 댓글 업로드 기능이 있으며, redux toolkit을 사용해 상태를 관리하였다.
    

## 🤷‍♂️Project Result & Impression

### React, Redux 적응

낫설었던 React와 Redux 사용법에 대해 익숙해질 수 있었다. 기본적인 사용법과 컴포넌트 재사용이 왜 효과적인지 느낄 수 있었다.

### TailWind

컴포넌트 기반 개발과 Unit-based CSS의 조합이 왜 좋은지 이해할 수 있었다. 스타일이 컴포넌트끼리 영향을 주지 않고, HTML과 CSS가 합쳐져서 수정할 부분을 찾기도 굉장히 간편했다.

하지만, class에 들어가는 글자 수가 길어지니 JSX가 길어져서 복잡한 스타일의 요소는 분리하여 컴포넌트로 만드는 것이 더욱 좋아 보였다. 

그렇게되니, 컴포넌트의 개수가 많아져 파일 관리가 조금 어려워져 리액트에서 파일 관리하는 법을 알면 좋을 것이라 생각했다.

Tailwind를 사용하며, 반응형 구성이 확실히 쉽다는 생각이 들었다.

### TypeScript

처음에는 React의 내장 타입을 찾는것이 번거롭고 Hook마다 타입 지정방법도 조금씩 다른 부분이 있어 불편했다. 하지만, 자동완성 기능이 개발 시간을 확실히 줄여주었고, Type을 직관적으로 알려줘 더욱 에러 발생율을 낮출 수 있었다.

## 추가적인 개발 목표

1. 유닛 테스트
2. 최적화
    1. Lazy loading
    2. 무한 스크롤(게시물을 내려도 계속 불러올 수 있도록)
3. 리팩토링
4. 클린코드
