import { userdata } from "@/mock-up/userData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await new Promise((res) => setTimeout(res, 3000));

  return res.status(200).json(userdata);
}
