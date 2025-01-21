// component
import MyPageComponentHeader from "./ComponentHeader";
// icon type
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorContainer({ label }: { label: string }) {
  return (
    <div className="p-4 px-8">
      <MyPageComponentHeader
        icon={faCircleExclamation}
        label={label}
      />
      <div className="h-[336px] flex justify-center items-center">
        <p className="font-bold">에러가 발생했습니다.</p>
      </div>
    </div>
  );
}
