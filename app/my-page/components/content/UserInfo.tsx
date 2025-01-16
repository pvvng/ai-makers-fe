// component
import UserProfile from "../UserProfile";
// fetch func
import fetchUserData from "@/util/function/fetch/fetchUserData";
// constant
import {
  AVAILABLE_DAY_LABEL,
  AVAILABLE_LANGUAGE_LABEL,
  AVAILABLE_LOCATION_LABEL,
} from "@/constants/validation/selectValueLabel";

export default async function UserInfo() {
  const userdata = await fetchUserData();

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

  return (
    <div className="p-4 px-8 flex gap-10">
      <UserProfile profile={userdata.profile} />
      <div className="w-3/4">
        <UserNameExplainContent {...nameExplainProps} />
        <UserInfoBadge {...userInfoBadgeProps} />
      </div>
    </div>
  );
}

function UserNameExplainContent({
  name,
  userKey,
  explain,
}: {
  name: string;
  userKey: string;
  explain: string;
}) {
  return (
    <div className="mt-4">
      <p className="text-3xl font-extrabold">
        {name}{" "}
        <span className="text-sm text-gray-400 font-normal">{userKey}</span>
      </p>
      <p className="mt-2 truncate">{explain}</p>
    </div>
  );
}

function UserInfoBadge({
  language,
  location,
  day,
}: {
  language: string[];
  location: string[];
  day: string[];
}) {
  const badgeDataArray = [
    { label: AVAILABLE_LANGUAGE_LABEL, data: language },
    { label: AVAILABLE_LOCATION_LABEL, data: location },
    { label: AVAILABLE_DAY_LABEL, data: day },
  ];

  return badgeDataArray.map((badgeData) => (
    <div key={badgeData.label} className="mt-4">
      <hr />
      <p className="mt-4 mb-2 font-semibold">{badgeData.label}</p>
      <BadgeContainer badgeValue={badgeData.data} />
    </div>
  ));
}

function BadgeContainer({ badgeValue }: { badgeValue: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-start items-center">
      {badgeValue.map((data) => (
        <Badge key={data} badgeData={data} />
      ))}
    </div>
  );
}

function Badge({ badgeData }: { badgeData: string }) {
  return <span className="p-1 px-2 rounded border shadow">{badgeData}</span>;
}
