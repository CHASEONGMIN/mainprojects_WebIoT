### 깃랩 계정으로 참여하여 깃헙에는 커밋내역이 인정되지 않았음 유의



## 냉장고를부탁해  (싸피 5기 공통프로젝트 우수프로젝트 선정)

---

## :bulb: 목차

- [프로젝트 소개](#프로젝트-소개)   
- [텍스트 ... ](#프로젝트-소개)   
- [프로젝트 명세](#프로젝트-명세)
  - [개발 환경](#개발-환경)
  - [Ganttchart](#Gantt-Chart)
  - [결과물](#결과물)

<br>

<br>

## :book: 프로젝트 소개

- 서비스 설명: 점점 늘어가는 2030 1인가구를 위한 냉장고 매니저이고, 특히 요리에 관심있는 2030 1인가구들의 입장에서 냉장고를 보다 효율적으로 활용할 수 있게 서비스를 제공하는 서비스

- 팀명: 7링바이브
- 트랙 : IoT

### :soccer: 목표

점점 늘어가는 2030 1인가구를 위한 냉장고 매니저이고, 2030 1인가구들의 입장에서 냉장고를 보다 효율적으로 활용할 수 있게 서비스를 제공하고자 함.
<br>

#### :boy: 우리의 페르소나

![페르소나](README.assets/페르소나.png)

- 요리에 관심이 있고 레시피 추천이 필요한 사람
- 요리에 관심이 있지만 재료관리를 잘 못하는 사람
- 요리에 크게 관심이 없어 냉동 식품을 쌓아두고 먹는 사람



- 주요 기능: 개인별 맞춤형 서비스 제공, 레시피 활용 서비스, 재료 관리 서비스

  ✅ 사용자별 재료 및 좋아하는 레시피 등록 가능

  ✅ 등록한 내용토대로 2가지 방식으로 추천 레시피 제공 및 레시피 검색 가능

  ✅ 레시피 재료 중 없는 것 표시 및 유통기한 지난 재료 있을 시 알림

- 차별화된 기술:

  ✅ 유저 개인별 맞춤형 추천 서비스 제공

  ✅ 데이터 전처리 후, 더 나아가 연관성 검색 기능을 구현하여 오타있어도 제대로된 결과 도출

  ✅ 시중에 없는 다양한 부가기능 제공(없는 재료 파악, 타이머 등)

  ✅ IoT센서를 활용한 기능 탑재

- 역할: 

  팀장-  (Jira 스프린트 및 이슈 관리, Git flow 관리 및 머지 확인, 진행현황 매일 확인하며 팀장회의 참석, 간트차트 활용하여 팀 일정관리), 

  기획 - (Whimsical을 통한 와이어프레임 제작, 화면정의서 제작), 

  프런트엔드(React) 및 디자인(Material-Ui) 개발,

  발표 

---

#### :envelope_with_arrow: 활용기술스택

![기술스택](README.assets/기술스택.jpg)

주요기술스택: React, Node.js, Django, DB(웹: Mysql, 라즈베리파이: Maria DB), 라즈베리파이, Whimsical, Python, Vanilla JS, vsCode, Chrome Browser, LED, 부저센서

#### :classical_building: ERD

![ERD](README.assets/ERD-1629428052595.png)



---

## :notebook_with_decorative_cover: 프로젝트 명세

### :house: 개발 환경

#### Front-end [Link](https://lab.ssafy.com/s05-webmobile3-sub3/S05P13B107/-/blob/master/frontend/README.md)

- __Framework__ : React  (Ver : 4.0.3)
- __지원 환경__ : Web / IoT(라즈베리 파이)
- __담당자__ : 차성민, 엄재식
  <br>

#### Back-end [Link](https://lab.ssafy.com/s05-webmobile3-sub3/S05P13B107/-/tree/master/backend)

- __Framework__ : Node.js, Express / Django
- __Database__ : Mysql
- __담당자__ : 박민상, 윤소영, 진지연
  <br>

#### Design

- Material-UI 활용
- __담당자__ : 차성민, 엄재식
  <br>




## :chart_with_upwards_trend: Gantt Chart 

```mermaid
gantt
    dateFormat  MM-DD
    title       7링 바이브 진행 현황
    %% excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section 프로젝트 준비
    주제 선정				  :done, 07-12, 1d
    기능 목록 상세 도출			:done, 07-13, 4d
    화면 기획				  :crit, active, 07-14, 10d
    개발 환경 구성             :done, 07-12, 5d
	
	section Frontend
    사전 공부 및 예제 실습 :active, 07-15, 11d    
    백단과 폴더 트리구조 동기화  :crit, active, 07-24, 2d
    프로토타입 페이지 제작 및 서버와의 연결 테스트 :active, 07-27, 3d
    자체 컴포넌트 구상 및 구현: crit, active, 07-27, 7d
    페이지 구현	 :crit, active, front1, 07-28, 18d
    - Main : 07-28, 2d
    - Auth : 07-30, 2d
    - Recipes : 08-01, 10d
    - Ingredients : 08-01, 10d
    - Mypage : 08-11, 1d
    - Not found : 08-12, 1d
    기능 구현	 :crit, active, front1, 08-08, 7d
    - Client, Server 연동 : 08-08, 1d
    - 페이지 틀 제작 마무리 및 디자인 : 08-09, 2d
    - 회원가입 중복처리 : 08-11, 1d
    - 패스워드 확인 : 08-11, 1d
    - 인피니티  스크롤 : 08-12, 1d
    - 검색어 처리 : 08-12, 1d
    - 토글로 레시피 검색 및 추천항목 변경 : 08-13, 1d
    - 레시피 좋아요 기능 : 08-13, 1d
    - 가상 키보드 추가 : 08-14, 1d
    - 타이머 기능 추가 : 08-14, 1d
    디자인작업 및 최종 마무리 : 08-08, 7d

    
    section Backend
    사전 공부 및 예제 실습 : done, 07-07, 13d
    DB 모델링 및 데이터 수집 : done, 07-19, 7d
    데이터 전처리 : done, 07-26, 3d
    연관어 검색 : done, 07-29, 2d
    Django 추천 : done, 07-29, 7d
    추천 개선 : 08-11, 4d

    jwt 로그인 : done,07-23, 10d
    레시피 조회 : done, 07-26, 2d
    재료CRD : done, 08-02, 2d
    mypage: done, 08-04 , 1d
    좋아요 : done, 08-05, 2d

    배포: active, 08-09, 11d

    section IoT
    장비 확인 :done, 07-19, 3d
    IoT 학습 : active, 08-03, 4d
    IoT 환경셋팅 : active, 08-07, 5d
    터치 패널에 출력 :crit, active, smtp, 08-10, 2d
    Node 연동 : 08-11, 2d
    시간 알림벨 : 08-13, 3d
    유통기한 알림벨 : 08-13, 3d

    section Ucc제작 및 발표준비
    발표 자료 :crit, active, rtc1, 08-16, 4d
    Ucc 제작 :crit, active,08-16, 4d
   

    section QA 및 
    QA 및 버그 찾기               :07-20, 31d
    
    %%section 기타
    %%UCC제작 :11-23, 3d
    %%발표준비 :11-26, 2d
```

##  :rainbow: 결과물

> #### 결과물 간략 요약 페이지 예시 사진입니다.
>
> ### :star:  회원페이지
>
> ![signin](README.assets/signin.jpg)
>
> 
>
> ### :star:  홈페이지
>
> ![home](README.assets/home.jpg)
>
> 
>
> ### :star:  레시피
>
> ![recipe](README.assets/recipe.jpg)
>
> 
>
> ### :star:  레시피 서치
>
> ![search](README.assets/search.jpg)
>
> 
>
> ### :star:  레시피 디테일
>
> ![recipe-detail](README.assets/recipe-detail.jpg)
>
> 
>
> ### :star:  유통기한 추천
>
> ![expired-recommend](README.assets/expired-recommend.jpg)



## 기획 산출물

![와이어프레임 및 화면정의서_1](README.assets/와이어프레임 및 화면정의서_1.png)





```markdown
UCC: https://drive.google.com/file/d/1IWZLK2Kx22yCSVlsHReYPQaXrGsl-NgR/view?usp=sharing

최종 ppt: https://docs.google.com/presentation/d/1shVhlIhsxN9V1Hzay55PwE47-LzFTyj5/edit?usp=sharing&ouid=104755432594470438671&rtpof=true&sd=true
```