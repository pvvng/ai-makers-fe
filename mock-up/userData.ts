import { CarouselData } from "@/types/carousel";

export const userdata = {
  userKey: "@pvvng-frontend",
  name: "pvvng",
  explain: "프론트엔드 개발합니다.",
  profile: "user-old",
  language: ["Javascript", "TypeScript", "Java", "Python"],
  day: ["월", "화", "수", "목", "금"],
  location: ["강남구", "강북구", "강서구", "용인시 처인구"],
};

export const userStudy = [
  {
    dataKey: "study1",
    name: "자바스크립트 딥다이브 스터디",
    explain: "딥다이브 딥하게 배웁니다.",
    activeUser: 8,
    isMarked: false,
  },
  {
    dataKey: "study2",
    name: "자바 스터디",
    explain: "객체지향을 알아보자",
    activeUser: 2,
    isMarked: true,
  },
];

export const userScapedStudy: CarouselData[] = [
  { type: "recommend", title: "용인 청년 개발자", content: "내용", dataKey: "001" },
  { type: "recommend", title: "명지대 공모전", content: "내용", dataKey: "002" },
  { type: "new", title: "웹 공모전", content: "내용", dataKey: "003" },
  { type: "hot", title: "퍼블리셔 공모전", content: "내용", dataKey: "007" },
];

export const userScrapedContest: CarouselData[] = [
  { type: "recommend", title: "용인 청년 개발자", content: "내용", dataKey: "001" },
  { type: "recommend", title: "자바 스터디", content: "내용", dataKey: "011" },
  { type: "recommend", title: "용인 프론트엔드 개발자 소모임", content: "내용", dataKey: "009" },
  { type: "recommend", title: "명지대 공모전", content: "내용", dataKey: "002" },
  { type: "recommend", title: "자바스크립트 딥다이브 스터디", content: "내용", dataKey: "015" },
  { type: "recommend", title: "퍼블리셔 공모전", content: "내용", dataKey: "007" },
  { type: "recommend", title: "맥북만 입장 가능", content: "내용", dataKey: "012" },
  { type: "recommend", title: "GO(고)로 백엔드 짜는 사람들", content: "내용", dataKey: "010" },
];
