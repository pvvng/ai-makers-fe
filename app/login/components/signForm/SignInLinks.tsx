import Link from "next/link";

export default function SignInLinks() {
  return (
    <div className="text-center mt-2">
      <Link href="/">아이디 찾기</Link>
      <span> | </span>
      <Link href="/">비밀번호 찾기</Link>
      <span> | </span>
      <Link href="/join-us" className="text-blue-600">
        회원가입
      </Link>
    </div>
  );
}
