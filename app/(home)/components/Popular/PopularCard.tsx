export default function PopularCard({
  title,
  rank,
}: {
  title: string;
  rank: number;
}) {
  return (
    <div
      className="w-full p-2 px-4 mt-1 mb-1 border rounded
    transition-all shadow cursor-pointer font-medium
    hover:blue-gradient-tl hover:text-white hover:scale-105"
    >
      {rank}. {title}
    </div>
  );
}
