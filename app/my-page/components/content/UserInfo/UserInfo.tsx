// components
import UserProfile from "./UserProfile";
import UserNameExplainContentWrapper from "./UserNameExplainContent";
import UserInfoBadge from "./UserInfoBadge";
import SkeletonContent from "../../skeleton/SkeletonContent";
import UserNameExplainContentContainer from "./UserNameExplainContentContainer";
import ProfileEditButtonContainer from "./ProfileEditButtonContainer";
// func
import getUserDataProps from "@/util/function/getUserDataProps";
// type
import { UserData } from "@/types/userdata";
// constant
import { APP_URL } from "@/constants/url";

export default async function UserInfo() {
  const userdataResponse = await fetch(`${APP_URL}/api/user`, {
    cache: "force-cache",
  });

  const userdata: UserData = await userdataResponse.json();
  const { nameExplainProps, userInfoBadgeProps } = getUserDataProps(userdata);

  if (!userdataResponse.ok) {
    return <SkeletonContent />;
  }

  return (
    <section className="p-4 px-8 flex gap-10">
      <UserProfile profile={userdata.profile} />
      <div className="w-3/4">
        <UserNameExplainContentWrapper>
          <UserNameExplainContentContainer {...nameExplainProps} />
          <ProfileEditButtonContainer />
        </UserNameExplainContentWrapper>
        <UserInfoBadge {...userInfoBadgeProps} />
      </div>
    </section>
  );
}
