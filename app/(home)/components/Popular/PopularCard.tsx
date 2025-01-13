import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopularCard({
  title,
  rank,
}: {
  title: string;
  rank: number;
}) {
  return (
    <div
      className="w-full p-2 px-4 mt-1 mb-1 border rounded flex gap-2
    transition-all shadow cursor-pointer
    hover:bg-blue-500 hover:text-white hover:scale-105 font-medium hover:font-semibold"
    >
      <p className="w-2/3 truncate">
        {rank}. {title}
      </p>
      <p className="w-1/3 text-end">
        <FontAwesomeIcon icon={faHeart} /> {50 - rank}
      </p>
    </div>
  );
}
