export default function UserNameExplainContentWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-center">{children}</div>
    </div>
  );
}
