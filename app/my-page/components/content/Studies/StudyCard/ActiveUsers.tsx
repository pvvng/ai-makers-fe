export default function ActiveUsers({ activeUser }: { activeUser: number }) {
  return (
    <p className="text-sm text-gray-500">
      현재 접속 중인 인원 : {activeUser}명
    </p>
  );
}
