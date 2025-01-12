import {
  contestData,
  recommendData,
  studyData,
} from "@/mock-up/bannerCardData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  recommendData;
  contestData;
  studyData;
  return res.status(200).json("hi");
}
