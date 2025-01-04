import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, password } = req.query;

  // 입력값 검증
  if (!id) {
    return res.status(401).json({ message: "아이디를 입력하지 않았습니다." });
  }

  if (!password) {
    return res.status(401).json({ message: "비밀번호를 입력하지 않았습니다." });
  }

  if (typeof id !== "string" || typeof password !== "string") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({ id, password });
}
