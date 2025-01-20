export default function LocationBadge({ text }: { text: string | null }) {
  if (!text) {
    return null;
  }

  return (
    <span className="bg-blue-500 text-white p-1 px-2 rounded-lg mr-2 mt-2 inline-block whitespace-nowrap">
      {text}
    </span>
  );
}
