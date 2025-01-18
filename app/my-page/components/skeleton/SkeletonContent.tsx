// constant
import {
  AVAILABLE_DAY_LABEL,
  AVAILABLE_LANGUAGE_LABEL,
  AVAILABLE_LOCATION_LABEL,
} from "@/constants/validation/selectValueLabel";

export default function SkeletonContent() {
  return (
    <div className="p-4 px-8 flex gap-10">
      <SkeltonUserImage />
      <div className="w-3/4">
        <SkeletonUserNameExplainInfo />
        <SkeletonUserInfoBadge />
      </div>
    </div>
  );
}

function SkeltonUserImage() {
  return (
    <div className="w-1/4">
      <div className="relative rounded-full overflow-hidden w-[180px] h-[180px] border-4 bg-gray-200 border-white shadow-lg -mt-10 mx-auto" />
    </div>
  );
}

function SkeletonUserNameExplainInfo() {
  return (
    <div className="mt-4">
      <div className="rounded w-[200px] h-[36px] bg-gray-200 animate-pulse" />
      <div className="rounded w-[360px] h-[24px] bg-gray-200 animate-pulse mt-2" />
    </div>
  );
}

function SkeletonUserInfoBadge() {
  const badgeLabelArray = [
    AVAILABLE_LANGUAGE_LABEL,
    AVAILABLE_LOCATION_LABEL,
    AVAILABLE_DAY_LABEL,
  ];

  return (
    <div className="mt-4">
      <hr />
      {badgeLabelArray.map((label) => (
        <BadgeContainer key={label} data={label} />
      ))}
    </div>
  );
}

function BadgeContainer({ data }: { data: string }) {
  const badgeArray = Array.from({ length: 5 }).map(
    (_, i) => (i + 1) * 12345678
  );

  return (
    <>
      <p className="mt-4 mb-2 font-semibold">{data}</p>
      <div className="flex flex-wrap gap-2 justify-start items-center">
        {badgeArray.map((v) => (
          <SkeletonBadge key={v} />
        ))}
      </div>
    </>
  );
}

function SkeletonBadge() {
  return (
    <div className="rounded w-[70px] h-[34px] bg-gray-200 animate-pulse" />
  );
}
