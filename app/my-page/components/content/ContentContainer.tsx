// components
import UserProfile from "../UserProfile";
import UserNameExplainContent from "./UserInfo/UserNameExplainContent";
import UserInfoBadge from "./UserInfo/UserInfoBadge";
// func
import fetchUserData from "@/util/function/fetch/fetchUserData";
import getUserDataProps from "@/util/function/getUserDataProps";

export default async function ContentContainer() {
  const userdata = await fetchUserData();
  const { nameExplainProps, userInfoBadgeProps } = getUserDataProps(userdata);

  return (
    <div className="w-5/6 rounded-tl-2xl shadow-lg overflow-hidden">
      <BackgroundBox />
      <UserInfoWrapper>
        <UserProfile profile={userdata.profile} />
        <div className="w-3/4">
          <UserNameExplainContent {...nameExplainProps} />
          <UserInfoBadge {...userInfoBadgeProps} />
        </div>
      </UserInfoWrapper>
    </div>
  );
}

function BackgroundBox() {
  return <div className="w-full blue-gradient-tl h-48" />;
}

function UserInfoWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-4 px-8 flex gap-10">{children}</div>;
}
