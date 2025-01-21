import { UserData } from "@/types/userdata";

export default function getUserDataProps(userdata: UserData) {
  const nameExplainProps = {
    name: userdata.name,
    userKey: userdata.userKey,
    explain: userdata.explain,
  };

  const userInfoBadgeProps = {
    language: userdata.language,
    location: userdata.location,
    day: userdata.day,
  };

  return { nameExplainProps, userInfoBadgeProps };
}
