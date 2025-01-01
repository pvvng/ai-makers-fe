import { Metadata } from "next";
import Input from "@/components/Input";
import { BlackButton, BlueButton, GreyButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "로그인",
};

const idProps = {
  htmlId: "login-id",
  label: "아이디",
  placeholder: "ex.aiMakersId",
  type: "text",
};

const passwordProps = {
  htmlId: "login-password",
  label: "비밀번호",
  placeholder: "ex.aimakersPassword",
  type: "password",
};

export default function SignInPage() {
  return (
    <div className="flex flex-wrap h-screen justify-center items-center p-2">
      <div className="w-[720px] text-center">
        <h1 className="text-3xl font-bold text-center">LOGIN</h1>
        <Input inputProps={idProps} />
        <Input inputProps={passwordProps} />
        <GreyButton buttonText="메인화면" />
        <BlueButton buttonText="로그인" />
      </div>
    </div>
  );
}
