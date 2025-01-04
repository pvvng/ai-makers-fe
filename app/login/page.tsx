// type
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
};

export default function SignInPage() {
  return (
    <div className="flex flex-wrap h-screen justify-center items-center p-2">
      <form className="w-[720px] text-center" action="/api/login" method="GET">
        <h1 className="text-3xl font-bold text-center">LOGIN</h1>
      </form>
    </div>
  );
}
