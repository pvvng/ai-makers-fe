import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavSearchInput() {
  return (
    <div className="w-6/12">
      <div className="w-full relative max-w-[480px]">
        <input
          className="h-[40px] rounded border border-blue-500 w-full px-2 pr-10"
          placeholder="공모전 / 스터디 찾기"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
