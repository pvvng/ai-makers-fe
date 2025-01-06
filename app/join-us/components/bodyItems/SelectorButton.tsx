'use client';

export default function SelectorButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="w-full lg:h-18 md:h-16 sm:h-14 h-12 border flex items-center justify-center transition"
      onClick={() => {console.log(text)}}
    >
      {text}
    </button>
  );
}