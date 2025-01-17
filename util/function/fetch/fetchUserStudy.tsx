import { APP_URL } from "@/constants/url";
import { UserStudies, UserStudy } from "@/types/userStudy";

export default async function fetchUserStudy() {
  try {
    const userStudiesResponse = await fetch(`${APP_URL}/api/user/study`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // cache: "force-cache",
    });

    if (!userStudiesResponse.ok) {
      console.log("데이터 확인 실패요");

      return;
    }

    const userStudies: UserStudies = await userStudiesResponse.json();

    return userStudies;
  } catch (error: any) {
    console.log(error);
  }
}
