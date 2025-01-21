interface PropsType {
  name: string;
  userKey: string;
  explain: string;
}

export default function UserNameExplainContentContainer(props: PropsType) {
  const { name, explain, userKey } = props;

  return (
    <div className="w-4/5">
      <p className="text-3xl font-extrabold">{name}</p>
      <p className="mt-2 truncate">{explain}</p>
    </div>
  );
}
