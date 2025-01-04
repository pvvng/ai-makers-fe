/** backend api url */
export const API_URL = process.env.API_URL;

/** color key type */
export type ColorKey = "blue" | "black" | "grey" | "red";
/** color math object */
export const colorMatch = {
  blue: "bg-blue-500 hover:bg-blue-700",
  black: "bg-black hover:bg-gray-900",
  grey: "bg-slate-600 hover:bg-slate-900",
  red: "bg-red-500 hover:bg-red-700",
};

/** join-us days */
export const days = ["월", "화", "수", "목", "금", "토", "일", "없음"];
/** join-us language options */
export const languageOptions = [
  "C", "C++", "C#",
  "R", "Python", "Java",
  "JavaScript","Ruby", "PHP",
  "Go", "Kotlin", "Rust", 
  "Swift", "Dart", "기타",
];
/** join-us purpose options */
export const purposeOptions = [
  { value: "contest", label: "공모전" },
  { value: "study", label: "스터디" },
  { value: "etc", label: "기타" },
];
/** join-us interest options */
export const interestOptions = [
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
export const contestOptions = ["0회", "1회", "2회", "3회", "4회", "5회 이상"];
