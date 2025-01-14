import Link from "next/link";

export default function NavLogo() {
  return (
    <div className="w-2/12">
      <Link href="/">
        <span className="font-black text-3xl text-blue-500">LOGO</span>
      </Link>
    </div>
  );
}
