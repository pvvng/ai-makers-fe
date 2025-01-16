// components
import UserProfile from "../../UserProfile";
import UserNameExplainContent from "./UserNameExplainContent";
import UserInfoBadge from "./UserInfoBadge";
// func
import fetchUserData from "@/util/function/fetch/fetchUserData";
import getUserDataProps from "@/util/function/getUserDataProps";

export default async function UserInfo() {
  const userdata = await fetchUserData();
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
