// type
import { Metadata } from "next";
// next
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "로그인",
};

export default function SignInPage() {
  return (
    <div className="px-3 sm:px-8 md:px-10 lg:px-20">
      <GoMainLink />
      <div className="w-full bg-white md:p-20 sm:p-10 p-4 flex flex-wrap justify-center items-center">
        <LogoField />
        <SignInField />
      </div>
    </div>
  );
}

function GoMainLink() {
  return (
    <p className="text-end mt-10 mb-2 pr-2">
      <Link href="/">홈화면으로</Link>
    </p>
  );
}

function LogoField() {
  return (
    <div className="md:w-1/2 text-center w-full h-full relative">
      <Image
        src="/세균.webp"
        alt="site-logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full m-auto rounded object-fill max-w-[240px]"
        priority
      />
    </div>
  );
}

function SignInField() {
  return (
    <div className="md:w-1/2 w-full sm:mt-0 mt-4">
      <h6 className="text-xl font-semibold md:block hidden">로그인</h6>
      <SignInForm />
      <SignInPersistenceCheckBox />
      <hr className="mt-2" />
      <SignInLinks />
    </div>
  );
}

function SignInForm() {
  return (
    <form className="flex gap-2 mt-2" action="/api/login" method="GET">
      <div className="flex gap-2 flex-col w-2/3">
        <SignInIdInput />
        <SignInPasswordInput />
      </div>
      <SignInLoginButton />
    </form>
  );
}

function SignInIdInput() {
  return (
    <input
      type="text"
      name="id"
      className="w-full h-12 p-2 border rounded"
      placeholder="아이디"
    />
  );
}

function SignInPasswordInput() {
  return (
    <input
      type="password"
      name="password"
      className="w-full h-12 p-2 border rounded"
      placeholder="비밀번호"
    />
  );
}

function SignInLoginButton() {
  return (
    <button className="w-1/3 h-[104px] bg-blue-500 text-white rounded">
      로그인
    </button>
  );
}

function SignInPersistenceCheckBox() {
  return (
    <div className="text-end">
      <input id="persistence" className="mt-5" type="checkbox" />
      <label htmlFor="persistence"> 로그인 유지</label>
    </div>
  );
}

function SignInLinks() {
  return (
    <div className="text-center mt-2">
      <Link href="/">아이디 찾기</Link>
      <span> | </span>
      <Link href="/">비밀번호 찾기</Link>
      <span> | </span>
      <Link href="/join-us">회원가입</Link>
    </div>
  );
}
