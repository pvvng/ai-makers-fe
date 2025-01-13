import { popularContestData } from "@/mock-up/bannerCardData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await new Promise((res) => setTimeout(res, 5000));

  return res.status(200).json(popularContestData);
}
