// icon
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyPageComponentHeader({
  icon,
  label,
}: {
  icon: IconDefinition;
  label: string;
}) {
  return (
    <>
      <p className="ml-2 text-xl font-bold text-gray-700">
        <FontAwesomeIcon icon={icon} /> {label}
      </p>
      <hr className="mt-2 mb-2" />
    </>
  );
}
