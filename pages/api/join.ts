import { NextApiRequest, NextApiResponse } from "next";

// {
//   id: 'ehddn12',
//   password: 'qwer1234!!',
//   confirmPassword: 'qwer1234!!',
//   nickname: '김동우',
//   birth: '20021221', // max 8
//   gender: 'man', // man, female
//   purpose: 'contest', // contest, study, etc
//   interest: 'robot', // roboy, game, ai, app, web, server, devops, etc
//   contest: '0', // 0,1,2,3,4,5
//   language: 'JavaScript,Java,Python',
//   day: '월,화,일', // "C", "C++", "C#", "R", "Python", "Java", "JavaScript", "Ruby", "PHP", "Go", "Kotlin", "Rust", "Swift", "Dart", "TypeScript"
//   location: '강남구,강북구,강동구'  // 최대 5개
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  // 처리 로직
  return res.status(200).json({ message: "회원가입이 완료되었습니다." });
}
