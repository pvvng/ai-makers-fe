export default function BannerCard({ data }: { data: number }) {
  return (
    <div className="w-1/4 px-1">
      <div className=" p-2 border rounded w-full h-[230px] shadow">{data}</div>
    </div>
  );
}
