export default function LoactionButton({
  value,
  clickHandler,
  selectedButtonColor,
}: {
  value: string;
  clickHandler: (value: string) => void;
  selectedButtonColor: (value: string) => "bg-blue-500 text-white" | "";
}) {
  return (
    <button
      type="button"
      className={`block w-full p-2 border mb-2 ${selectedButtonColor(value)}`}
      onClick={() => clickHandler(value)}
    >
      {value}
    </button>
  );
}
