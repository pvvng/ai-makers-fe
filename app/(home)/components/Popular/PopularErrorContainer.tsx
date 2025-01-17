export default function PopularErrorContainer({ name }: { name: string }) {
  return (
    <div className="w-1/4 min-h-[450px] p-4 border rounded-2xl shadow bg-white flex items-center">
      <p className="text-center">
        {name} 데이터를 불러오는 중 에러가 발생했습니다.
      </p>
    </div>
  );
}
