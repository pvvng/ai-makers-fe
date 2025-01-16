export default function UserNameExplainContent({
  name,
  userKey,
  explain,
}: {
  name: string;
  userKey: string;
  explain: string;
}) {
  return (
    <div className="mt-4">
      <p className="text-3xl font-extrabold">
        {name}{" "}
        <span className="text-sm text-gray-400 font-normal">{userKey}</span>
      </p>
      <p className="mt-2 truncate">{explain}</p>
    </div>
  );
}
