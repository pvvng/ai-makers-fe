import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  // 처리 로직
  return res.status(200).json({message : "회원가입이 완료되었습니다."});
}
