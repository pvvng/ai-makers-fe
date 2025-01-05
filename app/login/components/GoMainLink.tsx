import Link from "next/link";

export default function GoMainLink() {
  return (
    <p className="text-end mt-10 mb-2 pr-2">
      <Link href="/">홈화면으로</Link>
    </p>
  );
}
