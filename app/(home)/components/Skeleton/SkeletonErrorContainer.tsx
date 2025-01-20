export default function SkeletonErrorContainer() {
  return (
    <div className="flex justify-start items-center relative w-full transition-transform duration-500 p-1">
      <div className="w-full h-[180px] border rounded-2xl flex justify-center items-center">
        <h6 className="text-lg font-semibold">에러가 발생했습니다.</h6>
      </div>
    </div>
  );
}
