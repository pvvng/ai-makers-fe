// type
import { Metadata } from "next";
// components
import Input from "@/components/Input";
import { Button } from "@/components/Button";

import Link from "next/link";

export const metadata: Metadata = {
  title: "로그인",
};

export default function SignInPage() {
  return (
    <div className="flex flex-wrap h-screen justify-center items-center p-2">
      <form className="w-[720px] text-center" action="/api/login" method="GET">
        <h1 className="text-3xl font-bold text-center">LOGIN</h1>
        <Input inputProps={idProps} />
        <Input inputProps={passwordProps} />
        <Button buttonText="로그인" color="blue" type="submit" />
        <Link href="/">홈 화면으로</Link>
      </form>
    </div>
  );
}

const idProps = {
  htmlId: "id",
  label: "아이디",
  placeholder: "ex.aiMakersId",
  type: "text",
};

const passwordProps = {
  htmlId: "password",
  label: "비밀번호",
  placeholder: "ex.aimakersPassword",
  type: "password",
};
