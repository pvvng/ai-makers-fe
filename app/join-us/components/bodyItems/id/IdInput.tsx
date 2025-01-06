"use client";

export default function IdInput({ setId }: { setId: (id: string) => void }) {
  return (
    <input
      className="border w-full h-12 p-2 mt-2 shadow"
      placeholder="아이디"
      name="id"
      required
      onChange={(e) => setId(e.target.value)}
    />
  );
}
