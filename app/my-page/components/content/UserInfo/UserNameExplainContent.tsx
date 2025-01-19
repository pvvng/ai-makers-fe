interface PropsType {
  name: string;
  userKey: string;
  explain: string;
}

export default function UserNameExplainContent(props: PropsType) {
  const { name, userKey, explain } = props;
  
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
