import { contestData } from "@/mock-up/bannerCardData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 의도적 지연
  await new Promise(res => setTimeout(res, 3000));

  // 의도적 에러
  // return res.status(500).json("에러가 발생함.");

  return res.status(200).json(contestData);
}
