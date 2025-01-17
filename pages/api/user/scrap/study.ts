import { userScapedStudy, userStudy } from "@/mock-up/userData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await new Promise((res) => setTimeout(res, 5000));

  // return res.status(500).json({ message: "에러 발생함" });

  return res.status(200).json(userScapedStudy);
}
