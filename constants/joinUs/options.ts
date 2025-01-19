import { Options } from "@/types/options";

/** join-us purpose options */
export const purposeOptions: Options = [
  { value: "contest", label: "공모전" },
  { value: "study", label: "스터디" },
  { value: "etc", label: "기타" },
];
/** join-us interest options */
export const interestOptions: Options = [
  { value: "robot", label: "로봇" },
  { value: "game", label: "게임" },
  { value: "ai", label: "인공지능" },
  { value: "app", label: "어플리케이션" },
  { value: "web", label: "웹" },
  { value: "server", label: "서버" },
  { value: "devops", label: "데브옵스" },
  { value: "etc", label: "기타" },
];
/** join-us contest options */
export const contestOptions: Options = [
  { value: "0", label: "0회" },
  { value: "1", label: "1회" },
  { value: "2", label: "2회" },
  { value: "3", label: "3회" },
  { value: "4", label: "4회" },
  { value: "5", label: "5회 이상" },
];

/** join-us days */
export const days = ["월", "화", "수", "목", "금", "토", "일", "없음"];
/** join-us language options */
export const languageOptions = [
  "C",
  "C++",
  "C#",
  "R",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "PHP",
  "Go",
  "Kotlin",
  "Rust",
  "Swift",
  "Dart",
];