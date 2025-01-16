import { UserData } from "@/types/userdata";

export default async function fetchUserData() {
  try {
    const userdataResponse = await fetch(
      `${process.env.NEXTAUTH_URL}/api/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // cache: "force-cache",
      }
    );

    if (!userdataResponse.ok) {
      throw new Error("데이터 확인 실패요");
    }

    const userdata: UserData = await userdataResponse.json();

    return userdata;
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
}
