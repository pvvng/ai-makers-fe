// icon
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// classname
import classNames from "classnames";

export default function StudyCardHeader({
  name,
  isMarked,
}: {
  name: string;
  isMarked: boolean;
}) {
  const iconClassname = classNames("text-lg", {
    "text-amber-400": isMarked,
    "text-gray-400": !isMarked,
  });

  return (
    <div className="flex items-center">
      <p className="w-5/6 text-lg font-semibold truncate">{name}</p>
      <div className="w-1/6 text-end">
        <button>
          <FontAwesomeIcon icon={faBookmark} className={iconClassname} />
        </button>
      </div>
    </div>
  );
}
