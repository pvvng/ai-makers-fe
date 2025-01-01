export function BlueButton({ buttonText }: { buttonText: string }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 transition-all">
      {buttonText}
    </button>
  );
}

export function BlackButton({ buttonText }: { buttonText: string }) {
  return (
    <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-2 transition-all delay-500">
      {buttonText}
    </button>
  );
}

export function GreyButton({ buttonText }: { buttonText: string }) {
  return (
    <button className="bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded mx-2">
      {buttonText}
    </button>
  );
}
