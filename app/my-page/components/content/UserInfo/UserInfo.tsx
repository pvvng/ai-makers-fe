// components
import UserProfile from "../UserProfile";
import UserNameExplainContent from "./UserNameExplainContent";
import UserInfoBadge from "./UserInfoBadge";
// func
import getUserDataProps from "@/util/function/getUserDataProps";
// type
import { UserData } from "@/types/userdata";
// constant
import { APP_URL } from "@/constants/url";
import SkeletonContent from "../../skeleton/SkeletonContent";

export default async function UserInfo() {
  const userdataResponse = await fetch(`${APP_URL}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "force-cache",
  });

  if (!userdataResponse.ok) {
    return <SkeletonContent />
  }

  const userdata: UserData = await userdataResponse.json();

  const { nameExplainProps, userInfoBadgeProps } = getUserDataProps(userdata);

  return (
    <UserInfoWrapper>
      <UserProfile profile={userdata.profile} />
      <div className="w-3/4">
        <UserNameExplainContent {...nameExplainProps} />
        <UserInfoBadge {...userInfoBadgeProps} />
      </div>
    </UserInfoWrapper>
  );
}

function UserInfoWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-4 px-8 flex gap-10">{children}</div>;
}
