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
      throw new Error("데이터 확인 실패요");
    }

    const userStudies: UserStudies = await userStudiesResponse.json();

    return userStudies;
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
}
