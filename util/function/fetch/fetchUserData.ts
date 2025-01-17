import { APP_URL } from "@/constants/url";
import { UserData } from "@/types/userdata";

export default async function fetchUserData() {
  try {
    const userdataResponse = await fetch(
      `${APP_URL}/api/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // cache: "force-cache",
      }
    );

    if (!userdataResponse.ok) {
      console.log("데이터 확인 실패요");
    }

    const userdata: UserData = await userdataResponse.json();

    return userdata;
  } catch (error: any) {
    console.log(error);
  }
}
