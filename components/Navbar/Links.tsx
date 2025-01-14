// icon
import { faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons/faFileCircleQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// next
import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="w-1/6 text-end">
      <Link
        href="/about-us"
        className="ml-2 p-2 px-3 border border-gray-600 text-gray-600 font-medium rounded-full"
      >
        <FontAwesomeIcon icon={faFileCircleQuestion} /> 더 알아보기
      </Link>
    </div>
  );
}
