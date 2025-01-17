// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function StudiesComponentHeader({
  studyCount,
}: {
  studyCount?: number;
}) {
  return (
    <>
      <p className="ml-2 text-xl font-bold text-gray-700">
        <FontAwesomeIcon icon={faBook} /> 내 스터디 (
        {studyCount ? studyCount : 0}/4)
      </p>
      <hr className="mt-2 mb-2" />
    </>
  );
}
