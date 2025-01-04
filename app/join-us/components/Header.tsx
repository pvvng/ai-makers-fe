import Link from "next/link";

export default function JoinUsHeader() {
  return (
    <div id="header">
      <HeaderLinks />
      <HeaderLogo />
    </div>
  );
}

function HeaderLinks() {
  return (
    <div className="text-end mt-5">
      <Link href="/login">로그인</Link>
      <span> | </span>
      <Link href="/" className="text-end">
        홈
      </Link>
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl font-bold">AI-Makers</h1>
    </div>
  );
}
