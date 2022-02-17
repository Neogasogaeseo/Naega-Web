![image](https://user-images.githubusercontent.com/73823388/150393581-05b5d78e-6283-48d4-b983-f75ebaaca34b.png)

# 너가소개서<img src="https://user-images.githubusercontent.com/73823388/150399439-ae1c9902-8e37-45a3-a6a5-f3d29e7601a4.png" align=left width=100>

> 나와 함께한 당신이 대신 써 주는 나의 소개서 🖋📓  

<div align="center">
  <img src="https://user-images.githubusercontent.com/73823388/150405288-e6c19597-8ff6-49ac-911f-fe0d36c8e400.gif" width=150>
</div>

## 📓 Main Service

#### `너가소개서`
나를 알아갈 수 있는 다양한 질문의 설문 링크를 열고, 친구들의 답변으로 나를 알아가세요!
<div align="left">
  <img src="https://user-images.githubusercontent.com/58380158/154424612-c90f1089-267b-43de-966a-ce225d50613c.png" width=200>
  <img src="https://user-images.githubusercontent.com/58380158/154424797-d7e9d546-dfa2-4cf8-b049-9bff42dae819.png" width=200>
  <img src="https://user-images.githubusercontent.com/73823388/150408869-d1c5a594-9d08-436d-9054-4ce74e51a7b9.png" width=200>
  <img src="https://user-images.githubusercontent.com/73823388/150532865-59f7396d-c94b-4d87-83a8-a03da379bea1.png" width=200>
</div>

#### `팀원소개서`
팀원들과 협업하며 일어난 이슈들을 기록하고 그에 대한 피드백을 주고받으세요!
<div align="left">
  <img src="https://user-images.githubusercontent.com/58380158/154423628-661dac91-51a7-4351-bfb1-db7aef0fbb40.png" width=200>
  <img src="https://user-images.githubusercontent.com/58380158/154423893-d79f7a0a-afa9-4117-a1b5-19cdd8492a06.png" width=200>
  <img src="https://user-images.githubusercontent.com/58380158/154424007-8d709f6e-df95-46e8-9ca0-ef2d029733da.png" width=200>
  <img src="https://user-images.githubusercontent.com/73823388/150533291-a5ee42b2-81ca-43fd-9b48-fa7604d40af6.png" width=200>
</div>

#### `마이페이지`
나에게 많이 나온 키워드로 나를 소개하세요.  
나를 잘 표현하는 소개를 Pick 해서 마이페이지를 구성하고 링크로 공유해서 주변에 자랑해 보세요!
<div align="left">
  <img src="https://user-images.githubusercontent.com/58380158/154422566-a70ffaca-8843-48d0-bcd6-53016cce2717.png" width=200>
  <img src="https://user-images.githubusercontent.com/58380158/154422612-f7f56679-51c6-42a9-ac4b-761cefc96845.png" width=200>
</div>

## 📓 Team
> 대학생 IT 창업 동아리 `SOPT` 29기  
> 장기 해커톤 `APPJAM`  
> `너가소개서` 팀 웹 클라이언트  

|<img src="https://user-images.githubusercontent.com/73823388/150397401-f3d3da1d-c684-49af-9c09-b9249500b6f2.png" width="200">|<img src="https://user-images.githubusercontent.com/73823388/150397586-80771a1c-b238-4c6e-9110-d4f852d3eb04.png" width="200">|<img src="https://user-images.githubusercontent.com/73823388/150397746-6ade7bc1-3c5f-4cbc-b1a0-9fe8599c1230.png" width="200">|<img src="https://user-images.githubusercontent.com/73823388/150397971-bc6a3585-5d1f-42fe-8fc8-36edcb4dcd2b.png" width="200">|
|:--:|:--:|:--:|:--:|
|**김서진**|**김효인**|**백지연**|**남주영**|
|[@SeojinSeojin](https://github.com/SeojinSeojin)|[@Hyoin-Kim](https://github.com/Hyoin-Kim)|[@100Gyeon](https://github.com/100Gyeon)|[@NamJwong](https://github.com/NamJwong)|

<br />

## 📓 Project
### 기술 스택
<img src="https://user-images.githubusercontent.com/58380158/154420674-9410f9ae-de50-4371-9b0c-926ebcf87bba.png" width="300">

### 역할 분담
**서진** : 팀원소개서_피드백 조회 및 생성, 키워드 입력 / 너가소개서_폼 만들기, 폼 입력 / 마이페이지  
**지연** : 팀원소개서_메인, 팀별 상세 정보 조회 / 너가소개서_메인, 생성한 폼 조회 / 프로필 수정 페이지  
**효인** : 랜딩 페이지 / 로그인, 회원가입 / 팀원소개서_이슈 등록 / 너가소개서_답변 조회  
**주영** : 팀원소개서_팀 등록, 팀원 추가, 팀 수정 / 너가소개서_설문 링크 생성  

### 폴더 구조
```
├── .github : 워크플로우 관련 파일
├── public : index.html과 파비콘이 있는 곳
├── src
│   ├── application 
│   │   ├── hooks : 커스텀 훅 작성 
│   │   ├── stores : Recoil 관련 파일 작성
│   │   └── utils : 유틸 함수 작성
│   ├── assets : 아이콘, 이미지, 로티 파일
│   ├── infrastructure 
│   │   └── api : API 처리 관련 파일 작성 
│   │   ├── mock : Mock API 로직 관련 파일 작성
│   │   └── remote : 실서버 API 로직 관련 파일 작성
│   └── presentation
│       ├── components : 컴포넌트 관련 파일
│       ├── pages : 페이지 관련 파일
│       ├── routes : 라우터 관련 파일
│       └── style : GlobalStyle 관련 파일 
└── 각종 세팅 파일들과 리드미 파일
```
